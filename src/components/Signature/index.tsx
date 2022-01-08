import styles from './styles.module.scss';

export function Signature() {
  return (
    <footer className={styles.sigContainer}>
      <span>by </span>
      <a href="https://github.com/jotavcoelho" target="blank">@jotavcoelho</a>
    </footer>
  );
}