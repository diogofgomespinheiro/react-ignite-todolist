import { type ReactElement } from 'react';

import { Logo } from '@/components/icons';

import * as styles from './styles.css';

const Header = (): ReactElement => {
  return (
    <header className={styles.wrapper}>
      <Logo />
    </header>
  );
};

export { Header };
