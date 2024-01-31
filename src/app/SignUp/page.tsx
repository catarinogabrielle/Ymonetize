
"use client"
import { useState, useEffect } from 'react';
import styles from './page.module.scss';
import Form from '../../components/Form/page'

export default function SignUp() {
  const [activeBtn, setActiveBtn] = useState(false)
  const [influencer, setInfluencer] = useState(false)
  const [socialMedia, setSocialMedia] = useState(false)
  const [manager, setManager] = useState(false)
  const [form, setForm] = useState(false)

  useEffect(() => {
    if (influencer == true || socialMedia == true || manager == true) {
      setActiveBtn(true)
    } else (
      setActiveBtn(false)
    )
  }, [influencer, socialMedia, manager])

  return (
    form ? (
      <Form />
    ) : (
      <div className={styles.container}>
        <h1>Para realizar seu cadastro, selecione seu <text className={styles.title}>Perfil</text></h1>

        <div className={styles.contentCard}>
          <div className={influencer ? styles.cardActive : styles.card}
            onClick={() => {
              setInfluencer(!influencer)
              setSocialMedia(false)
              setManager(false)
            }}>
            <h2>Influencer</h2>
            <text>incentive as pessoas a explorar produtos e serviços com storys, videos e postagens nas redes sociais</text>
          </div>

          <div className={socialMedia ? styles.cardActive : styles.card}
            onClick={() => {
              setInfluencer(false)
              setSocialMedia(!socialMedia)
              setManager(false)
            }}>
            <h2>Social Media</h2>
            <text>incentive as pessoas a explorar produtos e serviços a partir de links e posts em redes sociais</text>
          </div>

          <div className={manager ? styles.cardActive : styles.card}
            onClick={() => {
              setInfluencer(false)
              setSocialMedia(false)
              setManager(!manager)
            }}>
            <h2>Paid Traffic Manager</h2>
            <text>incentive as pessoas a realizar conversões através de campanhas pagas</text>
          </div>
        </div>

        <div className={styles.contentBtn} onClick={() => { activeBtn == true && setForm(true) }}>
          <button className={activeBtn ? styles.btnActive : styles.btn}>Próximo</button>
        </div>
      </div>
    )
  )
}
