import Head from "next/head";
import Link from "next/link";
import { db } from "@/settings/firebase/firebase.setup";
import { getDocs,collection,query,orderBy } from "firebase/firestore";
import { Box,Card,CardActions,CardContent,Button,Typography } from "@mui/material";
import { numberWithCommas } from "@/utilities/numberWithCommas";

export async function getStaticProps() {
    const jobs = [];

    const q = query(collection(db,'jobs'),orderBy('timestamp','desc'))
    const onSnap = await getDocs(q);

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
            <h1 className="text-3xl mb-4">Recent jobs</h1>

            <div className="flex flex-col gap-3">
                {
                    jobsData.map(item => {
                        return (
                            <Card sx={{ minWidth: 280 }}>
                                <CardContent>
                                    <Typography 
                                    sx={{ fontSize: 14 }} 
                                    color="text.secondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {item.data.title}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        ₦{numberWithCommas(item.data.wages)}
                                    </Typography>
                                    <Typography variant="body2">
                                        {item.data.desc}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                    href={'jobs/'+item.data.url} 
                                    size="small"
                                    variant="contained">View Details</Button>
                                </CardActions>
                            </Card>
                        )
                    })
                }
            </div>
        </main>
        </>
    )
}

const styles = {
    container:'w-full px-16 py-8',
}