import NextAuth from 'next-auth';
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
   
  ],
  callbacks:{
    async session(session, profile){

      try{
        return{
          ...session,
          id: profile.sub
        }
      }catch{
        return{
          ...session,
          id: null
        }
      }

    },
    async signIn(user, account, profile){
      const { email } = user;
      try{
        return true;
      }catch(err){
        console.log('DEU ERRO: ', err);
        return false;
      }

    }
  }


})