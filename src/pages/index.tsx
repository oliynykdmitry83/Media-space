import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>МЕДІА ПРОСТІР</title>
        <meta
          name="description"
          content="Загальнодержавна суспільно-політична газета"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        МЕДІА ПРОСТІР 
        </h1>

        <p className={styles.description}>
        Загальнодержавна суспільно-політична газета
          {/* <code className={styles.code}>src/pages/index.tsx</code> */}
        </p>
      </main>

      <div className={styles.background}>
        <span className={styles.span}>«МЕДІА ПРОСТІР» — щорічна суспільно-політична газета в Україні</span>
      </div>

      <main className={styles.main}>        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>
              28.11.2019 вийшов перший номер всеукраїнської газети «МЕДІА ПРОСТІР».
            </h2>
            <p>
              Видається змішаними мовами: українська, російська.
            </p>
          </div>

          <div className={styles.card}>
            <p>Ми публікуємо матеріали про:</p>
            <ul>
              <li>політику</li>
              <li>суспільство</li>
              <li>бізнес</li>
              <li>науку і техніку</li>
              <li>здоров'я</li>
              <li>спорт</li>
              <li>освіту</li>
              <li>культуру</li>
              <li>дозвілля</li>
            </ul>
          </div>
          <div className={styles.card}>
            <p>Дотримуємося принципів неупередженого і збалансованого подання інформації та спираємося на західні стандарти незалежної журналістики.</p>
          </div>
          <div className={styles.card}>
            <p>Станом на лютий 2022 року колектив редакції нараховує <b>134 незалежних кореспонденти.</b></p>
          </div>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footersp}>Свідоцтво про державну реєстрацію друкованого ЗМІ КВ № 23697-13537Р від 04.01.2019</p>
      </footer>
    </div>
  );
}
