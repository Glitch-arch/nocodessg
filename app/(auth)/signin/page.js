"use client";
import { signIn } from "next-auth/react";
import React from "react";

const signInPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    const result = await signIn("credentials", {
      redirect: true,
      callbackUrl: "/",
      name: email,
      password: password,
    });
    // console.log(data, event);

    if (!result.ok) {
      console.log("error in signin", result);
    } else {
      console.log("Result object:", result);
    }
  };

  return (
    <div>
      Sign In Page
      <form onSubmit={(event) => submitHandler(event)}>
        <label htmlFor="">User Name</label>
        <input
          className="text-white"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your UserName"
        />

        <label htmlFor="">Password</label>
        <input
          className="text-white"
          type="password"
          placeholder="*****"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default signInPage;
