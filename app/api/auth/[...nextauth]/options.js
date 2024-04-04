import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

export const options = {
  pages: {
    signIn: "/signin",
    // signUp: "/signup",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: {
          label: "Name",
          type: "text",
          placeholder: "Enter Your Name",
        },
        mail: {
          label: "Mail:",
          type: "text",
          placeholder: "Enter your Mail",
        },
        password: {
          label: "Password:",
          type: "password",
        },
      },
      async authorize(credentials) {
        // Here we need to retrive the user data from the DB to match it
        const user = { id: "34", name: "Random", password: "test" };
        console.log("credentails in options file", credentials);
        if (
          credentials.name === user.name &&
          credentials.password === user.password
        ) {
          // redirect("/builder");
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
