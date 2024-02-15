import styles from './page.module.scss';
import Header from '../../components/Header/page';

export default function Profile() {
  return (
    <div className={styles.container}>
      <Header status='Profile' />

      <div className={styles.content}>
        <h1 className={styles.titleHeader}>Seu Perfil</h1>

        <div className={styles.contentInfo}>
          <h2>Gabrielle De Castro Santos Catarino</h2>
          <h3>Influencer</h3>
          <p>catarinogabrielle@gmail.com</p>

          <div className={styles.boxInfo}>
            <label>Label</label>
            <div>
              <text>Informações pessoais</text>
            </div>

            <label>Label</label>
            <div>
              <text>Informações pessoais</text>
            </div>

            <label>Label</label>
            <div>
              <text>Informações pessoais</text>
            </div>

            <label>Label</label>
            <div>
              <text>Informações pessoais</text>
            </div>

            <label>Label</label>
            <div>
              <text>Informações pessoais</text>
            </div>

            <label>Label</label>
            <div>
              <text>Informações pessoais</text>
            </div>

            <label>Label</label>
            <div>
              <text>Informações pessoais</text>
            </div>

            <label>Label</label>
            <div>
              <text>Informações pessoais</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
