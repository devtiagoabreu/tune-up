import Head from '../../node_modules/next/head';
import styles from '../styles/styles.module.scss';


export default function Home() {
  return (
    <>
    <Head>
      <title>Board de Conferências</title>
    </Head>    
    <main className={styles.contentContainer}>
      <img src="/images/board-user.svg" alt="Ferramenta board" />
      
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
        <img src="https://avatars.githubusercontent.com/u/9002790?v=4" alt="Tiago de Abreu" />
        <img src="https://avatars.githubusercontent.com/u/104369571?v=4" alt="Rodrigo Moura" />
        <img src="https://avatars.githubusercontent.com/u/85912921?v=4" alt="Igor Santiéllo" />
      </div>
    </main>
    </>
  )
}
