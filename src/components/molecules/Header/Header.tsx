import { ReactElement } from 'react';

import styles from './styles.module.scss';

const Header = (): ReactElement => {
  return (
    <header className={styles.wrapper}>
      <img src='/logo.svg' alt='Rocket' />
    </header>
  );
};

export { Header };
