import Head from "next/head";
import Link from "next/link";
import { db } from "@/settings/firebase/firebase.setup";
import { doc,getDocs,collection } from "firebase/firestore";

//headless cms

export async function getStaticProps() {
    const jobs = []

    const onSnap = await getDocs(collection(db,'jobs'));
    // setJobs(onSnap.docs.map(document => {
    //     return {
    //         id:document.id,
    //         data:{
    //             ...document.data()
    //         }
    //     }
    // }));

    onSnap.forEach(document => {
        jobs.push({
            id:document.id,
            data:document.data(),
        })
    })

    return {
        props: {
            jobsData:jobs
        }
    }
} 

export default function Jobs ({jobsData}) {
    return (
        <>
        <Head>
            <title>Jobs | Real Fast</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/realfast_logo.png" />
        </Head>
        <main className={styles.container}>
            {
                jobsData.map(item => {
                    return (
                        <div className="p-3 border border-gray-300 rounded-lg" key={item.id}>
                            <div className="flex flex-row justify-between mb-2">
                                <p className="font-bold text-lg">{item.data.title}</p>
                                <p>Salary: {item.data.wages}</p>
                            </div>

                            <div>
                                {item.data.desc}
                            </div>

                            <Link href={'jobs/'+item.data.url} className="bg-indigo-800 text-white text-2xl px-4 rounded-md">Job Details</Link>
                        </div>
                    )
                })
            }
        </main>
        </>
    )
}

const styles = {
    container:'w-full px-16 py-8',
}