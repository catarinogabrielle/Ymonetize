"use client"
import { FiDownload } from 'react-icons/fi';
import { FaArrowTrendUp } from "react-icons/fa6";
import styles from './page.module.scss';
import Image from 'next/image';
import { IoIosCloseCircle } from "react-icons/io";
import Link from 'next/link';

export default function Campaign() {
  return (
    <div className={styles.container}>
      <div className={styles.max}>
        <h1 className={styles.titleHeader}>
          Curso férias permanentes
          <Link href="/Dashboard">
            <IoIosCloseCircle className={styles.closed} />
          </Link>
        </h1>

        <div className={styles.content}>
          <div className={styles.box1}>
            <Image
              className={styles.banner}
              src="/carro.jpg"
              width={100}
              height={70}
              alt="campaigns"
            />
            <h1>Essa é sua chance de ir para o próximo nível!</h1>
            <text>Aprenda acumular MILHAS de um jeito ÚNICO. Descubra o Método do DJ e faça grana de verdade.</text>

            <div>
              <Image
                className={styles.img}
                src="/carro.jpg"
                width={100}
                height={70}
                alt="campaigns"
              />
            </div>

            <button className={styles.btn}>
              <FiDownload className={styles.iconDownload} />
              Baixar todas as fotos
            </button>
          </div>

          <div className={styles.box2}>
            <div className={styles.contentInfo}>
              <h1>Títulos</h1>
              <p>Financiamento de carros parcelas a partir de R$227,90</p>
              <p>Financiamento de carros novos e usados</p>

              <h1>Descrição</h1>
              <p>Para ter acesso a essa linha de credito, acesso o site e faça uma simulação.</p>
            </div>

            <div className={styles.boxSmartLink}>
              <h2>
                <FaArrowTrendUp className={styles.iconSmartLink} />
                Ganhe <text>R$50,00</text> por venda
              </h2>

              <div>
                <p>https://www.canva.com/design/DAEvda7eBkA</p>
              </div>

              <button onClick={() => navigator.clipboard.writeText('https://www.canva.com/design/DAEvda7eBkA')} className={styles.btnSmartLink}>COPIAR SMART LINK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}