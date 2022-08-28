import { useSession, signIn, signOut } from "next-auth/react";

import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi';
import Image from 'next/image';


export function SignInButton(){
  
  const { data: session } = useSession();

  return session ? (
    <button
    type="button"
    className={styles.signInButton}
    onClick={ () => signOut() }
    >
      <Image className={styles.img} src={session.user.image} alt="Foto do usuario" />
      Olá {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
    type="button"
    className={styles.signInButton}
    onClick={ () => signIn('github') }
    >
      <FaGithub color="#FFB800"/>
      Entrar com github
    </button>
  )
}