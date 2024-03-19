"use client"
import { ChangeEvent, useState } from 'react';
import styles from './page.module.scss';
import { FaCloudUploadAlt } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Form({ influencer, socialMedia, manager }: { influencer: boolean, socialMedia: boolean, manager: boolean }) {
  const [upload, setUpload] = useState<number | undefined>(0)
  const [prints, setPrints] = useState([])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [linkFacebook, setLinkFacebook] = useState('')
  const [linkInstagram, setLinkInstagram] = useState('')
  const [linkYoutube, setLinkYoutube] = useState('')
  const [linkTiktok, setLinkTiktok] = useState('')
  const [linkOutros, setLinkOutros] = useState('')
  const [value, setValue] = useState('')
  const [platforms, setPlatforms] = useState('')


  return (
    <div className={styles.container}>
      <div className={styles.contentHeader}>
        {influencer == true && (
          <>
            <h1>Tela de cadastro Influencer</h1>
            <h2>incentive as pessoas a explorar produtos e serviços com storys, videos e postagens nas redes sociais</h2>
          </>
        )}

        {socialMedia == true && (
          <>
            <h1>Tela de cadastro Social Media</h1>
            <h2>incentive as pessoas a explorar produtos e serviços a partir de links e posts em redes sociais</h2>
          </>
        )}

        {manager == true && (
          <>
            <h1>Tela de cadastro Paid Traffic Manager</h1>
            <h2>incentive as pessoas a realizar conversões através de campanhas pagas</h2>
          </>
        )}
      </div>

      <div className={styles.form}>
        <h1>Informações Pessoais</h1>
        <text>Seu Nome Completo</text>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="name"
        />

        <text>Seu E-mail</text>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <text>Número de Whatsapp/celular</text>
        <input
          type="text"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
        />

        <text>Digite sua Senha</text>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <text>Confirmar Senha</text>
        <input
          type="password"
          name="password"
        />

        <h1>Informações Pessoais</h1>
        {influencer == true && (
          <>
            <div className={styles.contentLabel}>
              <text>Link do Instagram</text>
              <p>(necessário colocar a #yads na bio para confirmar se o perfil é seu)</p>
            </div>
            <input
              type="text"
              name="name"
              onChange={(e) => setLinkInstagram(e.target.value)}
            />

            <div className={styles.contentLabel}>
              <text>Link do canal do YouTube</text>
              <p>(necessário colocar a #yads na bio para confirmar se o perfil é seu)</p>
            </div>
            <input
              type="text"
              name="name"
              onChange={(e) => setLinkYoutube(e.target.value)}
            />
          </>
        )}

        {socialMedia == true && (
          <>
            <div className={styles.contentLabel}>
              <text>Link da página no Facebook</text>
              <p>(necessário colocar a #yads na bio para confirmar se o perfil é seu)</p>
            </div>
            <input
              type="text"
              name="name"
              onChange={(e) => setLinkFacebook(e.target.value)}
            />

            <div className={styles.contentLabel}>
              <text>Link da página do Instagram</text>
              <p>(necessário colocar a #yads na bio para confirmar se o perfil é seu)</p>
            </div>
            <input
              type="text"
              name="name"
              onChange={(e) => setLinkInstagram(e.target.value)}
            />
          </>
        )}

        {(influencer == true || socialMedia == true) && (
          <>
            <div className={styles.contentLabel}>
              <text>Link do TikTok</text>
              <p>(necessário colocar a #yads na bio para confirmar se o perfil é seu)</p>
            </div>
            <input
              type="text"
              name="name"
              onChange={(e) => setLinkTiktok(e.target.value)}
            />

            <div className={styles.contentLabel}>
              <text>Link Outras Redes</text>
              <p>(necessário colocar a #yads na bio para confirmar se o perfil é seu)</p>
            </div>
            <input
              type="text"
              name="name"
              onChange={(e) => setLinkOutros(e.target.value)}
            />
          </>
        )}

        {manager == true && (
          <>
            <text>Quanto pretende investir por mês?</text>
            <input
              type="text"
              name="name"
              onChange={(e) => setValue(e.target.value)}
            />

            <text>Quais plataformas de Ads você irá utilziar?</text>
            <input
              type="text"
              name="name"
              onChange={(e) => setPlatforms(e.target.value)}
            />

            <text style={{ marginTop: 15 }}>Upload prints das contas de anúncios (tela cheia) últimos 6 meses</text>
            <div className={styles.contentUpload}>
              <FaCloudUploadAlt className={styles.icon} />
              <input
                type="file"
                name="filename"
                accept="image/png, image/jpeg"
                multiple
              />
              {upload == 0 ? (
                <p>Selecione algum para fazer upload</p>
              ) : (
                <p>{upload} Arquivo(s) selecionado(s)</p>
              )}
            </div>
          </>
        )}

        <button className={styles.btn}>Cadastrar</button>
      </div>
      <ToastContainer />
    </div>
  )
}
