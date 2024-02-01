"use client"
import { useState } from 'react';
import styles from './page.module.scss';
import { FaCloudUploadAlt } from "react-icons/fa";

export default function Form({ influencer, socialMedia, manager }: { influencer: boolean, socialMedia: boolean, manager: boolean }) {
  const [upload, setUpload] = useState<number | undefined>(0)

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
          name="name"
        />

        <text>Seu E-mail</text>
        <input
          type="text"
          name="email"
        />

        <text>Número de Whatsapp/celular</text>
        <input
          type="text"
          name="phone"
        />

        <text>Digite sua Senha</text>
        <input
          type="password"
          name="password"
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
            />

            <div className={styles.contentLabel}>
              <text>Link do canal do YouTube</text>
              <p>(necessário colocar a #yads na bio para confirmar se o perfil é seu)</p>
            </div>
            <input
              type="text"
              name="name"
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
            />

            <div className={styles.contentLabel}>
              <text>Link da página do Instagram</text>
              <p>(necessário colocar a #yads na bio para confirmar se o perfil é seu)</p>
            </div>
            <input
              type="text"
              name="name"
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
            />

            <div className={styles.contentLabel}>
              <text>Link Outras Redes</text>
              <p>(necessário colocar a #yads na bio para confirmar se o perfil é seu)</p>
            </div>
            <input
              type="text"
              name="name"
            />
          </>
        )}

        {manager == true && (
          <>
            <text>Quanto pretende investir por mês?</text>
            <input
              type="text"
              name="name"
            />

            <text>Quais plataformas de Ads você irá utilziar?</text>
            <input
              type="text"
              name="name"
            />

            <text style={{ marginTop: 15 }}>Upload prints das contas de anúncios (tela cheia) últimos 6 meses</text>
            <div className={styles.contentUpload}>
              <FaCloudUploadAlt className={styles.icon} />
              <input
                type="file"
                name="filename"
                multiple
                onChange={(event) => setUpload(event.target.files?.length)}
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
    </div>
  )
}
