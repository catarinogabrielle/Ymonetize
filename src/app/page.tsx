import Image from 'next/image';
import Link from 'next/link';
import styles from "./page.module.scss";

export default function SignIn() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.background}>
          <Image
            src="/ymbg.png"
            width={550}
            height={590}
            alt="ymbg"
          />
        </div>

        <div className={styles.contentLogin}>
          <h1>Login</h1>
          <input
            type="text"
            name="email"
            placeholder='Digite seu e-mail'
          />
          <input
            type="password"
            name="password"
            placeholder='Digite sua senha'
          />
          <button className={styles.btn}>Entrar</button>

          <div className={styles.contentRegister}>
            <text>Se você ainda não tem uma conta</text>
            <Link href="/SignUp">
              <h2>Registre-se aqui!</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
