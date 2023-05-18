import { useState,useEffect,useContext } from "react";
import { AppContext } from "@/settings/context/appContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from 'yup';
import { auth } from "@/settings/firebase/firebase.setup";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub,AiOutlineUndo } from 'react-icons/ai';
import { signIn } from 'next-auth/react';
import { getServerSession } from "next-auth/next";
import { nextAuthOptions } from "./api/auth/[...nextauth]";

//create a validation schema (validation rules)
const fieldsSchema = yup.object().shape({
    email:yup.string().email('enter a valid email').required('Required'),
    password:yup.string().required('Required'),
});

export default function Signin () {
    const [screenHeight,setScreenHeight] = useState(0);
    const [authChoice,setAuthChoice] = useState(false);
    const { uid,setUid,email,setEmail } = useContext(AppContext);

    const router = useRouter();

    const handleNextAuthSignin = () => {
        signIn('google');
    }

    useEffect(() => {
        setScreenHeight(window.innerHeight - 60);
    },[]);

    const {values,handleBlur,handleChange,errors,handleSubmit,touched } = useFormik({
        validationSchema:fieldsSchema,
        initialValues:{
            email:'',
            password:'',
        },
        onSubmit:(values) => {
            signInWithEmailAndPassword(auth,values.email,values.password)
            .then(() => {
                onAuthStateChanged(auth,(user) => {
                    setUid(user.uid);
                    setEmail(user.email);
                });

                router.push('/talents/profile-update')
            })
            .catch(error => console.log(error));
        } 
    });

    return (
        <>
        <Head>
            <title>Sign in | Real Fast</title>
            <meta name="description" content="Sign in to Real Fast and start applying for jobs" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/realfast_logo.png" />
        </Head>
        <main className={styles.container} style={{height:`${screenHeight}px`}}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Sign in to your RealFast account</h2>
                
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className="flex justify-end">
                        <p className="text-md text-indigo-700 flex flex-row gap-3"
                        onClick={() => authChoice ? setAuthChoice(false) : setAuthChoice(true)}>
                            <span>Sign in with {authChoice ? 'credentials' : 'email '} instead</span>
                            <AiOutlineUndo className="text-indigo-500 text-2xl"/>
                        </p>
                    </div>

                    <div className={styles.inputBlockMain}>
                        <label className={styles.label}>Email address</label>
                        <input 
                        id="email"
                        type="email" 
                        placeholder="valid email address"
                        className={styles.inputField}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                        {
                            errors.email && touched.email 
                            ? <p className={styles.formError} style={{color:'red'}}>{errors.email}</p>
                            : null
                        }
                    </div>

                    <div className={styles.inputBlockMain} style={{display:authChoice ? 'none' : 'block'}}>
                        <label className={styles.label}>Password</label>
                        <input 
                        id="password"
                        type="password" 
                        className={styles.inputField}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                        {
                            errors.password && touched.password 
                            ? <p className={styles.formError} style={{color:'red'}}>{errors.password}</p>
                            : null
                        }
                    </div>

                    <button 
                    type="submit" 
                    className={styles.submitBtn}
                    onClick={() => {
                        if(authChoice) {
                            signIn('email',{email:values.email,redirect:false})
                        } else {
                            signIn('credentials',{
                                email:values.email,
                                password:values.password,
                                redirect:false,
                            })
                        }
                    }}>Sign in</button>
                </form>

                <p className="text-lg text-center my-2">OR, sign in with</p>

                <div className={styles.or}>
                    <button 
                    className={styles.signinBtn} 
                    onClick={handleNextAuthSignin}><FcGoogle/></button>

                    <button 
                    className={styles.signinBtn}
                    ><AiFillGithub/></button>
                </div>
            </div>
        </main>
        </>
    )
}

export async function getServerSideProps (context) {
    const session = await getServerSession(context.req,context.res,nextAuthOptions);

    //if there is an active session, redirect to talent dashboard
    if(session){
        if(session.user.accountType == 'talent') {
            return {
                redirect:{
                    destination:'/talents',
                    permanent:false,
                }
            }
        } else if(session.user.accountType == 'org') {
            return {
                redirect:{
                    destination:'/org',
                    permanent:false,
                }
            }
        }
    }

    return {
        props:{ 
            session:JSON.parse(JSON.stringify(session))
        }
    }
}

const styles = {
    container:'w-full flex flex-col justify-center items-center px-16',
    wrapper:'w-full md:w-[720px] flex flex-col gap-16',
    title:'font-heading text-3xl text-indigo-900 text-center',
    inputBlockRow:'w-full flex flex-col md:flex-row md:gap-3 md:mb-4',
    inputBlock:'w-full mb-4',
    inputBlockMain:'w-full mb-4',
    label:'text-gray-500 mb-2',
    inputField:'w-full block border border-gray-200 py-5 px-4 rounded-full',
    submitBtn:'w-full bg-indigo-800 py-5 px-4 rounded-full text-lg text-white',
    formError:'text-xs',
    or:'w-full flex flex-row gap-2 justify-center',
    signinBtn:'w-full px-3 py-4 flex justify-center rounded-full text-3xl border border-gray-300'
}