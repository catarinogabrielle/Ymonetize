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
            <input
              type="text"
              name="name"
              placeholder='Informações pessoais'
            />

            <label>Label</label>
            <input
              type="text"
              name="name"
              placeholder='Informações pessoais'
            />

            <label>Label</label>
            <input
              type="text"
              name="name"
              placeholder='Informações pessoais'
            />

            <label>Label</label>
            <input
              type="text"
              name="name"
              placeholder='Informações pessoais'
            />

            <label>Label</label>
            <input
              type="text"
              name="name"
              placeholder='Informações pessoais'
            />

            <button className={styles.btn}>Atualizar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
