import Link from "next/link";
import { ImFacebook2 } from 'react-icons/im';
import { AiFillInstagram,AiFillTwitterCircle,AiFillYoutube } from "react-icons/ai";
import { footerStyles } from "@/utilities/styles/footer.styles";

export default function Footer () {
    const year = new Date().getFullYear();

    return (
        <footer className={footerStyles.footer}>
            <small className={footerStyles.copyrights}>&copy; {year} Real Fast Jobs LLC</small>

            <ul className={footerStyles.socialBlock}>
                <li>
                    <Link href='#'><ImFacebook2 className={footerStyles.icon}/></Link>
                </li>
                <li>
                    <Link href='#'><AiFillInstagram className={footerStyles.icon}/></Link>
                </li>
                <li>
                    <Link href='#'><AiFillTwitterCircle className={footerStyles.icon}/></Link>
                </li>
                <li>
                    <Link href='#'><AiFillYoutube className={footerStyles.icon}/></Link>
                </li>
            </ul>

            <ul className={footerStyles.legalBlock}>
                <li>
                    <Link href='#' className={footerStyles.legalText}>Terms</Link>
                </li>
                <li>
                    <Link href='#' className={footerStyles.legalText}>Privacy Policy</Link>
                </li>
                <li>
                    <Link href='#' className={footerStyles.legalText}>Bug Bounty</Link>
                </li>
            </ul>
        </footer>
    )
}