import { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export function ButtonLink({ children, ...rest}: ButtonProps) {
  return (
    <button 
      className={styles.standardButton}
      {...rest}
    >
      {children}
    </button>
  )
}