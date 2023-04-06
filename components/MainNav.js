import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineMenu } from 'react-icons/hi';
import { navbarStyles } from '@/utilities/navbar.styles';
import { AiOutlineClose,AiOutlineArrowRight } from 'react-icons/ai';

export default function MainNav() {
    const [showMobileNav,setShowMobileNav] = useState(false);

    return (
        <div>
            <nav className={navbarStyles.navBar} id='mainNav'>
            <ul className={navbarStyles.navSection}>
                <li className={navbarStyles.responsiveMenuItems}>
                <span className={navbarStyles.brandName}>Real Fast</span>
                </li>
                <li>
                <Image width={30} height={38} src='/realfast_logo.png' alt='real fast logo'/>
                </li>

                <li className={navbarStyles.responsiveMenuItems}>
                <Link href='#' className={navbarStyles.navText}>Find Jobs</Link>
                </li>
            </ul>

            <ul className={navbarStyles.navSection}>
                <li className={navbarStyles.responsiveMenuItems} 
                style={{borderRight:'2px solid gray',paddingRight:8}}>
                <Link href='#' className={navbarStyles.navText}>Sign in</Link>
                </li>
                <li className={navbarStyles.responsiveMenuItems}>
                <Link href='#' className={navbarStyles.navText}>Post a job</Link>
                </li>
                <li>
                <HiOutlineMenu 
                className={navbarStyles.menu}
                onClick={() => setShowMobileNav(true)}/>
                </li>
            </ul>
            </nav>

            <nav className={navbarStyles.mobileNav} 
            style={{display:showMobileNav ? 'block' : 'none'}}>
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
        </div>
    )
}
