"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.scss';
import { MdSpaceDashboard, MdMenu, MdCampaign } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { FaUser, FaMoneyCheck } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { IoIosExit, IoMdClose } from "react-icons/io";

export default function Header({ status }: { status: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [statusUser, setStatusUser] = useState('')
  //const [statusUser, setStatusUser] = useState('Admin')

  return (
    <>
      {menuOpen ? (
        <IoMdClose onClick={() => setMenuOpen(!menuOpen)} size={27} className={styles.menu} />
      ) : (
        <MdMenu onClick={() => setMenuOpen(!menuOpen)} size={27} className={styles.menu} />
      )}

      <div style={menuOpen ? { left: 0 } : { left: -300 }} className={styles.container}>
        <div>
          <Link href="/Dashboard">
            <Image
              src="/ymonetize.png"
              width={180}
              height={70}
              alt="ymbg"
              style={{ cursor: 'pointer' }}
            />
          </Link>

          <div className={styles.content}>
            {statusUser != 'Admin' ? (
              <>
                <Link href="/Dashboard">
                  <div className={status == 'Dashboard' ? styles.boxActive : styles.box}>
                    <MdSpaceDashboard size={18} className={status == 'Dashboard' ? styles.iconActive : styles.icon} />
                    <h1>Dashboard</h1>
                  </div>
                </Link>

                <Link href="/Reports">
                  <div className={status == 'Reports' ? styles.boxActive : styles.box}>
                    <IoDocumentText size={18} className={status == 'Reports' ? styles.iconActive : styles.icon} />
                    <h1>Relatorios</h1>
                  </div>
                </Link>

                <Link href="/Payments">
                  <div className={status == 'Payments' ? styles.boxActive : styles.box}>
                    <FaMoneyCheck size={18} className={status == 'Payments' ? styles.iconActive : styles.icon} />
                    <h1>Pagamentos</h1>
                  </div>
                </Link>

                <Link href="/Profile">
                  <div className={status == 'Profile' ? styles.boxActive : styles.box}>
                    <FaUser size={16} className={status == 'Profile' ? styles.iconActive : styles.icon} />
                    <h1>Perfil</h1>
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link href="/Create_Campaign">
                  <div className={status == 'CreateCampaign' ? styles.boxActive : styles.box}>
                    <MdCampaign size={25} className={status == 'CreateCampaign' ? styles.iconActive : styles.icon} />
                    <h1>Campanhas</h1>
                  </div>
                </Link>

                <Link href="/Create_Reports">
                  <div className={status == 'CreateReports' ? styles.boxActive : styles.box}>
                    <BiSolidReport size={19} className={status == 'CreateReports' ? styles.iconActive : styles.icon} />
                    <h1>Relatórios</h1>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>

        <Link href="/">
          <div className={styles.box}>
            <IoIosExit size={23} className={styles.icon} />
            <h1>Sair</h1>
          </div>
        </Link>
      </div>
    </>
  )
}
