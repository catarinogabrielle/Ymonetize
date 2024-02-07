import styles from './page.module.scss';
import Header from '../../components/Header/page';

export default function Payments() {
  return (
    <div className={styles.container}>
      <Header status='Payments' />

      <div className={styles.content}>
        <h1 className={styles.titleHeader}>Pagamentos</h1>

      </div>
    </div>
  )
}
