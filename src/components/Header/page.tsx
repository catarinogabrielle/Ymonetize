"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.scss';
import { MdSpaceDashboard, MdMenu } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { FaUser, FaMoneyCheck } from "react-icons/fa";
import { IoIosExit } from "react-icons/io";

export default function Header({ status }: { status: string }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <MdMenu onClick={() => setMenuOpen(!menuOpen)} size={27} className={styles.menu} />

      <div style={menuOpen ? { left: 0 } : { left: -300 }} className={styles.container}>
        <div>
          <Image
            src="/ymonetize.png"
            width={180}
            height={70}
            alt="ymbg"
          />

          <div className={styles.content}>
            <Link href="/Dashboard">
              <div className={status == 'Dashboard' ? styles.boxActive : styles.box}>
                <MdSpaceDashboard size={19} className={status == 'Dashboard' ? styles.iconActive : styles.icon} />
                <h1>Dashboard</h1>
              </div>
            </Link>

            <Link href="/Reports">
              <div className={status == 'Reports' ? styles.boxActive : styles.box}>
                <IoDocumentText size={19} className={status == 'Reports' ? styles.iconActive : styles.icon} />
                <h1>Relatorios</h1>
              </div>
            </Link>

            <Link href="/Payments">
              <div className={status == 'Payments' ? styles.boxActive : styles.box}>
                <FaMoneyCheck size={19} className={status == 'Payments' ? styles.iconActive : styles.icon} />
                <h1>Pagamentos</h1>
              </div>
            </Link>

            <Link href="/Profile">
              <div className={status == 'Profile' ? styles.boxActive : styles.box}>
                <FaUser size={19} className={status == 'Profile' ? styles.iconActive : styles.icon} />
                <h1>Perfil</h1>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.box}>
          <IoIosExit size={24} className={styles.icon} />
          <h1>Sair</h1>
        </div>
      </div>
    </>
  )
}
