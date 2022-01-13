import Link from 'next/link';

import { Button } from '../components/Button';

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
          <a>DV de CPF</a>
        </Link>
        <Button>Button</Button>
      </div>
    </div>
  )
}
