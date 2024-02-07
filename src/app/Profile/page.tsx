import styles from './page.module.scss';
import Header from '../../components/Header/page';

export default function Profile() {
  return (
    <div className={styles.container}>
      <Header status='Profile' />

      <div className={styles.content}>
        <h1 className={styles.titleHeader}>Seu Perfil</h1>

      </div>
    </div>
  )
}
