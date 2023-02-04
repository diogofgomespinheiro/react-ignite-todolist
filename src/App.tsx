import { CreateButton } from '@/components/CreateButton';
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';

import styles from './App.module.scss';

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <form className={styles.createTaskContainer}>
          <Input type='text' placeholder='Adicione uma nova tarefa' />
          <CreateButton>Criar</CreateButton>
        </form>
        <div></div>
      </main>
    </>
  );
}

export default App;
