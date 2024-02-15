import styles from './page.module.scss';
import Header from '../../components/Header/page';

export default function CreateCampaign() {
  return (
    <div className={styles.container}>
      <Header status='CreateCampaign' />

      <div className={styles.content}>
        <h1 className={styles.titleHeader}>Criar Campanhas</h1>


      </div>
    </div>
  )
}
