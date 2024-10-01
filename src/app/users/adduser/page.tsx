import React from 'react';
// import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Adduserform from '@/components/Adduser/adduserform';



// export const metadata: Metadata = {
//   title: "Next.js add user | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js add user page for TailAdmin  Tailwind CSS Admin Dashboard Template",
// };



const Adduser = async(edit?: { firstname: string; lastname: string; email: string; phone: string; username: string; gender: string; }) => {

  return (
    <DefaultLayout>
    <h1>Add User</h1>
    <Adduserform/>
    
      </DefaultLayout>
  )
}

export default Adduser