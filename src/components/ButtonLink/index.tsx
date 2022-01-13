import React, { AnchorHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  
}

export const ButtonLink = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, onClick, href, ...rest}: AnchorProps, ref) => (
    <a 
      className={styles.standardButton}
      href={href}
      onClick={onClick}
      ref={ref}
      {...rest}
    >
      {children}
    </a>
  )
)