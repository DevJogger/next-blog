import Image from 'next/image'
import { Figtree } from 'next/font/google'
import styles from './style.module.scss'

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
})

const page = () => {
  return (
    <div className={`${styles.main} ${figtree.className}`}>
      <div className={styles.card}>
        <div className={styles.image}></div>
        <div className={styles.content}>
          <div className={styles.category}>Learning</div>
          <span className={styles['publish-date']}>Published 21 Dec 2023</span>
          <h2 className={styles.title}>HTML & CSS foundations</h2>
          <p className={styles.description}>
            These languages are the backbone of every website, defining structure, content, and
            presentation.
          </p>
        </div>
        <div className={styles.author}>
          <Image
            src="/static/images/workshop/002/user-pic.png"
            alt=""
            className={styles['user-pic']}
            width={500}
            height={500}
          />
          Greg Hooper
        </div>
      </div>
    </div>
  )
}

export default page
