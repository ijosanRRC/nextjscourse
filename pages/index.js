import styles from '@/styles/Home.module.css'
import Link from 'next/link';

function HomePage() {
  return (
      <div className={styles.container}>
        <h1>The Home page</h1>
         <ul>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/clients">Clients</Link>
            </li>
         </ul>
      </div>
  );
}

export default HomePage
