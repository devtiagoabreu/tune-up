import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton() {

    const session = true;

    return session ? (
        <button
        type='button'
        className={styles.signInButton}
        onClick={ () => {} }
        >
            <img src="https://avatars.githubusercontent.com/u/9002790?s=400&u=fb402a07049c4b0073622d4eda6bc8fd20d1fb32&v=4" alt="Foto do Usuário" />
            Olá Tiago de Abreu
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button
        type='button'
        className={styles.signInButton}
        onClick={ () => {} }
        >
            <FaGithub color="#FFB800"/>
            Entrar com github
        </button>
    )
}