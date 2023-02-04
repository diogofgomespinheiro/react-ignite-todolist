import { CreateButton } from '@/components/CreateButton';
import { Header } from '@/components/Header';

import styles from './App.module.scss';

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <form className={styles.createTaskContainer}>
          <input type='text' />
          <CreateButton>Criar</CreateButton>
        </form>
        <div></div>
      </main>
    </>
  );
}

export default App;
