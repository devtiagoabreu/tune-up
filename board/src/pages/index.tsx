import Head from '../../node_modules/next/head';
import styles from '../styles/styles.module.scss';

export default function Home() {
  return (
    <>
    <Head>
      <title>Board de Conferências</title>
    </Head>    
    <div>
      <h1 className={styles.title}>Board <span>wow</span></h1>
    </div>
    </>
  )
}
