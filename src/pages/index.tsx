import Link from 'next/link';
import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.listContainer}>
        <Link href="/cgc">
          <a>CGC</a>
        </Link>
        {/* process.env.NODE_ENV && */}
        <Link href="/cweaser">
          <a>Carlos Wilson</a>
        </Link>
        <Link href="/cpf">
          <a>Dígito Verif. de CPF</a>
        </Link>
      </div>
    </div>
  )
}
