import React from 'react'
import { SignUp } from "@clerk/nextjs";

const Page = () =>{
  return  <SignUp appearance={{
    elements: {
      card: "mt-[100px]", // pushes modal down from header
    },
  }}/>;
}

export default Page;