import styles from './page.module.scss';
import Header from '../../components/Header/page';

export default function CreateReports() {
  return (
    <div className={styles.container}>
      <Header status='CreateReports' />

      <div className={styles.content}>
        <h1 className={styles.titleHeader}>Criar Relatórios</h1>


      </div>
    </div>
  )
}
