import { ReactElement } from 'react';

import styles from './styles.module.scss';

function Header(): ReactElement {
  return (
    <header className={styles.wrapper}>
      <img src='/logo.svg' alt='Rocket' />
    </header>
  );
}

export { Header };
