import Head from '../../../node_modules/next/head';
import styles from './styles.module.scss';
import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock} from 'react-icons/fi';
import { SupportButton } from '../../components/SupportButton/index';

export default function Board() {
    return(
        <>
        <Head>
            <title>Minhas Conferências</title>
        </Head>
        <main className={styles.container}>
            <form>
                <input 
                    type="text" 
                    placeholder='Digite o número da conferência'
                />
                <button type="submit">
                    <FiPlus size={25} color="#17181f" />
                </button>
            </form>

        <h1>Você tem 1 conferência em aberto!</h1>

        <section>
            <article className={styles.taskList}>
                <p>ID: 000001 | NFe: 00002365 | Cliente: Itabaiana | Lote: 00005689 | QTDE: 800 caixas | Produto: F20/1</p>
                <div className={styles.actions}>
                    <div>
                        <div>
                            <FiCalendar size={20} color="#FFB800" />
                            <time>22 Agosto 2022</time>
                        </div>
                        <button>
                            <FiEdit2 size={20} color="#FFF" />
                            <span>Editar</span>
                        </button>
                    </div>
                    <button>
                        <FiTrash size={20} color="#FF3636" />
                        <span>Excluir</span>
                    </button>
                </div>
            </article>
        </section>

        </main>

        <div className={styles.vipContainer}>
            <h3>Respire fundo e fique atento às surpresas deliciosas que a vida preparou para você!</h3>
            <div>
                <FiClock size={28} color="#FFF"/>
                <time>
                    Última conferências a 2 dias.
                </time>

            </div>
        </div>

        <SupportButton/>

        </>
    )
}