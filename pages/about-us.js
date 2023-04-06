import { useEffect } from "react";
import JobCard from "@/components/JobCard"; 
import { jobsData } from "@/data/jobsdata";

export default function AboutUs () {

    //run something after page has been render
    useEffect(() => {
        const rNums = [];

        for(let count = 0;count < 100;count++){
            rNums.push(Math.round(Math.random() * 100000));
        }

        console.log(rNums);
    },[]);

    return (
       <div>
            {
                jobsData.map(job => {
                    return (
                        <JobCard title={job.title} location={job.loc} key={job.id}>
                            <h1>Info block</h1>
                            <p>Some information</p>
                        </JobCard>
                    )
                })
            }
       </div>
    )
}