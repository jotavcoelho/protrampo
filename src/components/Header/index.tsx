// import { useRouter } from 'next/router';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Signature } from '../Signature';
import styles from './styles.module.scss';

export function Header() {
  const { asPath } = useRouter();

  const [title, setTitle] = useState('');

  const isAtHome = asPath === "/" ? true : false;
  
  useEffect(() => {
    setTitle(document.title);
  }, [asPath]);

  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {!isAtHome &&
          <Link href="/">
            <a>
              {'<'} Voltar
            </a>
          </Link>
        }

        <h2>
          {title}
        </h2>
      </div>
      <Signature />
    </header>
  );
}