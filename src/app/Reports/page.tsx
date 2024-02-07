import styles from './page.module.scss';
import Header from '../../components/Header/page';

export default function Reports() {
  return (
    <div className={styles.container}>
      <Header status='Reports' />

      <div className={styles.content}>
        <h1 className={styles.titleHeader}>Relatórios</h1>

      </div>
    </div>
  )
}
