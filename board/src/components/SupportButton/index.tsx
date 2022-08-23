import Link from '../../../node_modules/next/link';
import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SupportButton() {

    return (
        <div className={styles.donateContainer}>
            <Link href="/donate">
                <button>
                    APOIAR
                </button>
            </Link>
        </div>
    ) 
}