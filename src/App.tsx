import { CreateButton, Input } from '@/components/atoms';
import { Header } from '@/components/molecules';

import styles from './App.module.scss';

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <div className={styles.createTaskContainer}>
          <Input type='text' placeholder='Adicione uma nova tarefa' />
          <CreateButton>Criar</CreateButton>
        </div>
        <div></div>
      </main>
    </>
  );
}

export default App;
