import styles from './page.module.scss';
import Header from '../../components/Header/page';
import { SiSimpleanalytics } from 'react-icons/si';

export default function Reports() {
  return (
    <div className={styles.container}>
      <Header status='Reports' />

      <div className={styles.content}>
        <h1 className={styles.titleHeader}>Relatórios</h1>

        <div className={styles.contentBoxTop}>
          <div className={styles.boxTop}>
            <div className={styles.nameBox}>
              <div style={{ backgroundColor: '#F18A0E' }} className={styles.boxIcon}>
                <SiSimpleanalytics className={styles.icon} />
              </div>
              <h1>Ganhos estimados</h1>
            </div>

            <nav className={styles.infoBoxTop}>
              <div>
                <p>Ganhos</p>
                <h2>R$6.000,00</h2>
              </div>

              <div>
                <p>Conversões</p>
                <h2>120</h2>
              </div>
            </nav>
          </div>

          <div className={styles.boxTop}>
            <div className={styles.nameBox}>
              <div style={{ backgroundColor: '#2E0EF1' }} className={styles.boxIcon}>
                <SiSimpleanalytics className={styles.icon} />
              </div>
              <h1>Suas conversões</h1>
            </div>

            <nav className={styles.infoBoxTop}>
              <div>
                <p>Vendas</p>
                <h2>120</h2>
              </div>

              <div>
                <p>Visitas</p>
                <h2>0</h2>
              </div>

              <div>
                <p>Contatos</p>
                <h2>0</h2>
              </div>
            </nav>
          </div>
        </div>

        <table className={styles.table}>
          <tbody>
            <tr>
              <th>Data</th>
              <th>Smart link</th>
              <th>Conversão</th>
              <th>Conversões</th>
              <th>Ganho</th>
            </tr>

            <tr>
              <td>17/05/2023</td>
              <td>feriaspermanentes.com/pagina_de_vendas</td>
              <td>venda</td>
              <td>30</td>
              <td>R$1.500,00</td>
            </tr>
            <tr>
              <td>17/05/2023</td>
              <td>feriaspermanentes.com/pagina_de_vendas</td>
              <td>venda</td>
              <td>30</td>
              <td>R$1.500,00</td>
            </tr>
            <tr>
              <td>17/05/2023</td>
              <td>feriaspermanentes.com/pagina_de_vendas</td>
              <td>venda</td>
              <td>30</td>
              <td>R$1.500,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
