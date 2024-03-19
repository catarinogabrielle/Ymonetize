"use client"
import { useState } from 'react';
import styles from './page.module.scss';
import Header from '../../components/Header/page';
import Image from 'next/image';
import { FaCloudUploadAlt } from "react-icons/fa";

export default function CreateCampaign() {
  const [createNew, setCreateNew] = useState(false)
  const [upload, setUpload] = useState<number | undefined>(0)

  return (
    <div className={styles.container}>
      <Header status='CreateCampaign' />

      <div className={styles.content}>
        <h1 className={styles.titleHeader}>Criar Campanhas</h1>

        {createNew == false ? (
          <div className={styles.contentNew}>
            <div className={styles.boxNewHeader}>
              <h2>Campanhas</h2>
              <button onClick={() => setCreateNew(true)} className={styles.btnNew}>Adicionar campanha</button>
            </div>

            <div className={styles.contentCampaign}>
              <div className={styles.boxCampaign}>
                <Image
                  className={styles.img}
                  src="/carro.jpg"
                  width={100}
                  height={70}
                  alt="campaigns"
                />

                <div>
                  <p>Financiamento de carros parcelas a partir de R$227,90</p>
                  <h3>R$0,40 por visita</h3>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.contentCreate}>
            <label>Títulos</label>
            <div>
              <input
                type="text"
                name="text"
              />
              <button className={styles.btn}>Adicionar</button>
            </div>
            <text>Título adicionado aqui</text>

            <label style={{ marginTop: 40 }}>Descrição</label>
            <textarea></textarea>

            <label>Sub Título</label>
            <input
              type="text"
              name="text"
            />

            <label>Sub Descrição</label>
            <input
              type="text"
              name="text"
            />

            <label>Valor Por Venda</label>
            <input
              type="text"
              name="text"
            />

            <label>Link</label>
            <input
              type="text"
              name="text"
            />

            <label>Imagens para a campanha</label>
            <div className={styles.contentUpload}>
              <FaCloudUploadAlt className={styles.icon} />
              <input
                type="file"
                name="filename"
                multiple
                accept="image/png, image/jpeg"
                onChange={(event) => setUpload(event.target.files?.length)}
              />
              {upload == 0 ? (
                <p>Selecione algum para fazer upload</p>
              ) : (
                <p>{upload} Arquivo(s) selecionado(s)</p>
              )}
            </div>

            <button className={styles.btnCreate}>Criar Campanha</button>
          </div>
        )}
      </div>
    </div>
  )
}
