import styles from './page.module.scss';
import Header from '../../components/Header/page';
import { AiFillBank } from "react-icons/ai";

export default function Payments() {
  return (
    <div className={styles.container}>
      <Header status='Payments' />

      <div className={styles.content}>
        <h1 className={styles.titleHeader}>Pagamentos</h1>

        <div className={styles.contentBoxTop}>
          <div className={styles.boxTop}>
            <h1>Saldo</h1>
            <h2>R$6.000,00</h2>
          </div>

          <div className={styles.boxTop}>
            <h1>Próximo pagamento</h1>
            <h2>R$120.238,00 <text>mai/2023</text></h2>
          </div>

          <div className={styles.boxTopBank}>
            <h1>Como você recebe</h1>
            <h2><AiFillBank color='#F18A0E' size={33} style={{ marginRight: 5 }} /> Gerenciar forma de pagamento</h2>
          </div>
        </div>

        <table className={styles.table}>
          <tbody>
            <tr>
              <th>Data</th>
              <th>Status</th>
              <th>Debitado</th>
            </tr>

            <tr>
              <td>17/05/2023</td>
              <td>Pagamento automático: Transferência eletrônica para conta bancária  • • • • 01I1. 0622I1B7032R007114</td>
              <td>-103.308,00</td>
            </tr>
            <tr>
              <td>17/05/2023</td>
              <td>Pagamento automático: Transferência eletrônica para conta bancária  • • • • 01I1. 0622I1B7032R007114</td>
              <td>-103.308,00</td>
            </tr>
            <tr>
              <td>17/05/2023</td>
              <td>Pagamento automático: Transferência eletrônica para conta bancária  • • • • 01I1. 0622I1B7032R007114</td>
              <td>-103.308,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div >
  )
}
