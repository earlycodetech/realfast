import Image from "next/image";
import Link from "next/link";

export default function JobCard() {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div className={styles.titleBlock}>
          <h3 className={styles.jobTitle}>JavaScript/React Developer</h3>
          <p className={styles.location}>Abuja</p>
        </div>

        <div className={styles.companyBlock}>
          <Image src="/realfast_logo.png" width={36} height={36} alt="company logo" />
          <p className={styles.companyName}>Meta Soft Corporation</p>
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.description}>The Setup's team mission is to enable partners to have autonomy combined with great experience to manage their partnership with us, and we are currently doing that by creating new flows on the Partners Portal, such as a new way </p>

        <div className={styles.metaBlock}>
          <div className={styles.wageBlock}>
            <p className={styles.metaText}>NGN450,000/monthly</p>
            <p className={styles.metaText}>Full time</p>
          </div>

          <Link href="#" className={styles.apply}>View and Apply</Link>
        </div>
      </div>
    </div>
  )
}

const styles = {
  card:'border border-gray-200 rounded-md p-3',
  head:'flex flex-col md:flex-row justify-between',
  titleBlock:'',
  jobTitle:'text-3xl font-reading',
  location:'text-lg text-indigo-600',
  companyBlock:'h-[40px] flex flex-row gap-2 items-center',
  companyName:'text-lg',
  body:'border-t border-gray-300 mt-2 pt-2',
  description:'text-gray-800',
  metaBlock:'flex flex-row justify-between mt-4',
  wageBlock:'flex flex-row gap-3',
  metaText:'text-lg font-bold',
  apply:'h-[52px] flex justify-center items-center bg-indigo-800 text-white font-bold px-3 rounded-md cursor-pointer'
}