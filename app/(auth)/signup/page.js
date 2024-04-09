"use client";
// import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const SignUpPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      Sign up Page
      <form>
        <label htmlFor="">User Name</label>
        <input type="text" placeholder="Donald Truph" />
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Donald@donaldmail.com" />
        <label htmlFor="">password</label>
        <input type="password" placeholder="******" />
      </form>
      <button onClick={() => router.push("/signin")}>SignUp</button>
    </div>
  );
};

export default SignUpPage;
