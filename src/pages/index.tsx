import Link from 'next/link';

import { Button } from '../components/Button';
import { ButtonLink } from '../components/ButtonLink';

import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.listContainer}>
        <Link href="/cgc" passHref>
          <ButtonLink>CGC</ButtonLink>
        </Link>
        {/* process.env.NODE_ENV && */}
        <Link href="/cweaser" passHref>
          <ButtonLink>Carlos Wilson</ButtonLink>
        </Link>
        <Link href="/cpf" passHref>
          <ButtonLink>DV de CPF</ButtonLink>
        </Link>
      </div>
    </div>
  )
}
