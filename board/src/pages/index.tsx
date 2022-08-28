import Head from '../../node_modules/next/head';
import styles from '../styles/styles.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <Head>
      <title>Board de Conferências</title>
    </Head>    
    <main className={styles.contentContainer}>
      <Image 
        className={styles.image} 
        src="/images/board-user.svg" 
        alt="Ferramenta board"
        width={300}
        height={300}
      />
      
      <section className={styles.callToAction}>
        <h1>
          Conferência de Entrada de Matéria Prima
        </h1>
        <p>
          <span>Integrado com </span>
          ERP Systêxtil.
        </p>
      </section>

      <div className={styles.donaters}>
      
      </div>
    </main>
    </>
  )
}
