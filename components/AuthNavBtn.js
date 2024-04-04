import { useSession, signIn, signOut } from "next-auth/react";

const AuthNavBtn = () => {
  const session = useSession();
  console.log(session.data?.user);
  if (session) {
    return (
      <button className="text-white" onClick={() => signOut()}>
        Sign Out
      </button>
    );
  } else {
    return (
      <button className="text-white" onClick={() => signIn()}>
        SignIn
      </button>
    );
  }
};

export default AuthNavBtn;
