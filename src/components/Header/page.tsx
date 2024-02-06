import Image from 'next/image';
import styles from './page.module.scss';
import { MdSpaceDashboard } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { FaUser, FaMoneyCheck } from "react-icons/fa";
import { IoIosExit } from "react-icons/io";

export default function Header() {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src="/ymonetize.png"
          width={180}
          height={70}
          alt="ymbg"
        />

        <div className={styles.content}>
          <div className={styles.box}>
            <MdSpaceDashboard size={20} className={styles.icon} />
            <h1>Dashboard</h1>
          </div>

          <div className={styles.box}>
            <IoDocumentText size={20} className={styles.icon} />
            <h1>Relatorios</h1>
          </div>

          <div className={styles.box}>
            <FaMoneyCheck size={20} className={styles.icon} />
            <h1>Pagamentos</h1>
          </div>

          <div className={styles.box}>
            <FaUser size={20} className={styles.icon} />
            <h1>Perfil</h1>
          </div>
        </div>
      </div>

      <div className={styles.boxExit}>
        <IoIosExit size={30} className={styles.icon} />
        <h1>Sair</h1>
      </div>
    </div>
  )
}
