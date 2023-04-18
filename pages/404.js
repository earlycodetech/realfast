import { useState,useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function PageNotFound () {
    const [screenHeight,setScreenHeight] = useState(0);

    useEffect(() => {
        setScreenHeight(window.innerHeight - 60);
    },[]);

    return (
        <>
        <Head>
          <title>Page Not Found | Real Fast</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/realfast_logo.png" />
        </Head>
        <main className={styles.container} style={{height:`${screenHeight}px`}}>
            <Image width={200} height={200} src='/images/cable.png'/>
            <h3 className={styles.message}>Sorry, the page you requested for does not exist</h3>
            <p className={styles.action}>Return to <Link className={styles.link} href='/about-us?keyword=react&jobtype=fulltime'>About Us</Link></p>
        </main>
        </>
    )
}

const styles = {
    container:'w-full flex flex-col justify-center items-center px-16',
    message:'text-lg my-3',
    action:'text-md',
    link:'text-indigo-500'
}