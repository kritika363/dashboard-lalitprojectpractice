// import Users from "../../components/tablepage";

// const TablesPage = async () => {
//   const res = await fetch(`https://dummyjson.com/users?limit=5`);
//   const usersData = await res.json();

//   return <Users dat={usersData} />;
// };

// export default TablesPage;



import React from 'react';
import Users from "@/components/tablepage";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

// const datat = async() =>{
 
// }

const User = async() => {
  const res = await fetch(`https://dummyjson.com/users?limit=5&search?q=firstName`);
  const usersData = await res.json();
  // console.log('abcd')
  // const innerd = await datat()
  return (
    <DefaultLayout>
              <Users dat={usersData} />
   
    </DefaultLayout>

   
      )
 
}

export default User

