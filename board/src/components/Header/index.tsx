import Link from '../../../node_modules/next/link';
import styles from './styles.module.scss';
import { SignInButton } from '../SignInButton';
import Image from 'next/image';

export function Header() {
    return(
        <>
            <header className={styles.headerContainer}>
                <div className={styles.headerContent}>
                    <Link href="/">
                    <Image 
                        className={styles.image} 
                        src="/images/logo.svg" 
                        alt="Logo Meu Board" 
                        width={50}
                        height={50}
                    />
                    </Link>
                    <nav>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                        <Link href="/board">
                            <a>Conferências</a>
                        </Link>
                    </nav>

                   <SignInButton/>
                </div>
            </header>
        </>
    )
}