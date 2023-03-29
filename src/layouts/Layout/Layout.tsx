import * as React from 'react';

import { Header } from '@/components/molecules';

import * as styles from './styles.css';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): React.ReactElement => {
  return (
    <div>
      <Header />
      <main className={styles.container}>{children}</main>
    </div>
  );
};

export { Layout };
