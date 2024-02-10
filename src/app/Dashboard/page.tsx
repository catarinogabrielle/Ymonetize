"use client"
import { useState } from 'react';
import styles from './page.module.scss';
import { SiSimpleanalytics } from "react-icons/si";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import Header from '../../components/Header/page';
import Image from 'next/image';

export default function Dashboard() {
  const [earningsOpen, setEarningsOpen] = useState(true)

  const arrayInfoEarnings = [
    { backgroundColor: '#F18A0E', period: 'Hoje (até o momento)', value: '1.238,00' },
    { backgroundColor: '#F1370E', period: 'Ontem', value: '2.248,00' },
    { backgroundColor: '#3BF10E', period: 'Últimos 7 dias', value: '19.124,00' },
    { backgroundColor: '#2E0EF1', period: 'Este mês', value: '29.124,00' },
    { backgroundColor: '#A80EF1', period: 'Próximo pagamento', value: '120.238,00' },
  ]

  return (
    <div className={styles.container}>
      <Header status='Dashboard' />
      <div className={styles.content}>
        <h1 className={styles.titleHeader}>Dashboard</h1>

        <div className={styles.box}>
          <h2>Ganhos estimados
            {earningsOpen ? (
              <MdOutlineArrowDropDown onClick={() => setEarningsOpen(!earningsOpen)} className={styles.iconSelect} />
            ) : (
              <MdOutlineArrowDropUp onClick={() => setEarningsOpen(!earningsOpen)} className={styles.iconSelect} />
            )}
          </h2>

          <div className={earningsOpen ? styles.contentEarnings : styles.contentEarningsNone}>
            {arrayInfoEarnings.map(item => (
              <div className={styles.cardEarnings}>
                <div style={{ backgroundColor: item.backgroundColor }} className={styles.contentIcon}>
                  <SiSimpleanalytics className={styles.icon} />
                </div>
                <div className={styles.contentInfoEarnings}>
                  <label>{item.period}</label>
                  <h3>R${item.value}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.box}>
          <h2>Promover Campanhas</h2>

          <div className={styles.contentCampaigns}>
            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>

            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>


            <div className={styles.cardCampaigns}>
              <div className={styles.infoCampaigns}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <text>Financiamento de carros
                  parcelas a partir de R$227,90</text>
              </div>

              <div className={styles.warnCampaigns}>
                <p>Ganhe R$0,40 por visita</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}