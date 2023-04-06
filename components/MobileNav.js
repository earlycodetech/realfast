import { useState } from "react";
import Link from "next/link";
import { AiOutlineClose,AiOutlineArrowRight } from 'react-icons/ai';
import { navbarStyles } from "@/utilities/navbar.styles";

export default function MobileNav() {
    const [showMobileNav,setShowMobileNav] = useState(true);

    return (
        <nav className={navbarStyles.mobileNav} 
        style={{display:!showMobileNav ? 'none' : 'block'}}>
            <AiOutlineClose 
            className={navbarStyles.mobileMenuClose}
            onClick={() => setShowMobileNav(false)}
            />

            <div className={navbarStyles.halfScreenMenuBlock}>
                <ul className={navbarStyles.mobileMenuItems}>
                <li className={navbarStyles.mobileMenuItem}>
                    <Link href='#' className={navbarStyles.mobileMenuText}>Home</Link>
                </li>
                <li className={navbarStyles.mobileMenuItem}>
                    <Link href='#' className={navbarStyles.mobileMenuText}>Find Jobs</Link>
                </li>
                <li className={navbarStyles.mobileMenuItem}>
                    <Link href='#' className={navbarStyles.mobileMenuText}>Pricing</Link>
                </li>
                <li className={navbarStyles.mobileMenuItem}>
                    <Link href='#' className={navbarStyles.mobileMenuText}>Support</Link>
                </li>
                <li className={navbarStyles.mobileMenuItem}>
                    <Link href='#' className={navbarStyles.mobileMenuText}>Contact us</Link>
                </li>
                </ul>

                <div className={navbarStyles.mobileBottomItems}>
                <Link href='#' className={navbarStyles.signinBtn}>
                    <span className={navbarStyles.btnItems}>Sign in</span>
                    <AiOutlineArrowRight className={navbarStyles.btnItems}/></Link>
                <Link href='#' className={navbarStyles.createAcctBtn}>
                    <span>Create account</span>
                    <AiOutlineArrowRight />
                </Link>
                </div>
            </div>
        </nav>
    )
}


