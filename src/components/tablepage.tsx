
"use client";

import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import styles from "./Adduser/adduser.module.css"
import Adduser from "@/app/users/adduser/page";


const Users = ({ dat }: any) => {
  const [limit, setLimit] = useState<null | number>(null);
  const [data, setData] = useState<any[]>(dat?.users || []); // Initialize data as an array
  const [SearchUser, setSearchUser] = useState<string>("");
  const [edit, setEdit] = useState({
    firstname: '',
    lastname :'',
    email :'',
    phone: '',
    username:'',
    gender:'',
  })

  // Fetch users
  useEffect(() => {
    if (limit !== null) {
      const fetchUsers = async () => {
        const res = await fetch(`https://dummyjson.com/users?limit=${limit}`);
        const users = await res.json();
        setData(users.users || []); // Set data as the array of users
      };

      fetchUsers();
    }
  }, [limit]);

  // Handle the dropdown change
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(parseInt(e.target.value));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(e.target.value.toLowerCase());
  }
  // Filter users based on search term
  const filteredUsers = data.filter((item: any) =>
    item.firstName.toLowerCase().includes(SearchUser) ||
    item.lastName.toLowerCase().includes(SearchUser) ||
    item.email.toLowerCase().includes(SearchUser)
  );


  const handlesubmit = (e: React.FormEvent<HTMLFormElement>)  =>{
    e.preventDefault();
    Adduser(edit);
    console.log("edituser")
    console.log(edit)
     // Reset form fields
     setEdit({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      username: '',
      gender: '',
    });
  }

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Breadcrumb pageName="User" />
      <div className="flex justify items-center mb-4 gap-10">
        <div className="addbtn">
          <Link href="/users/adduser" style={{ background: "#3c50e0", color: "#fff", padding: "8px 19px", borderRadius: "4px" }}>Add User</Link>
        </div>
        <div className="relative flex flex-1 flex-shrink-0 justify-end">
          <input
            className="peer block rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
            placeholder="Search"
            value={SearchUser}
            onChange={handleSearchChange}
          />
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="postsPerPage" className="font-medium text-black dark:text-white">
            Users per page:
          </label>
          <select className="border rounded px-2 py-1" onChange={handleSelectChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="80">80</option>
            <option value="120">120</option>
            <option value="150">150</option>

          </select>
        </div>
      </div>

      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-2 text-left dark:bg-meta-4">
            <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">Id</th>
            <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">Name</th>
            <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">Email</th>
            <th className="px-4 py-4 font-medium text-black dark:text-white">Phone</th>
            <th className="px-4 py-4 font-medium text-black dark:text-white">Username</th>
            <th className="px-4 py-4 font-medium text-black dark:text-white">Gender</th>
            <th className="px-4 py-4 font-medium text-black dark:text-white"></th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((item: any) => (
              <tr key={item.id}>
                <td className="font-medium text-black dark:text-white p-2.5 xl:p-5">{item.id}</td>
                <td className="font-medium text-black dark:text-white p-2.5 xl:p-5">
                  {item.firstName} {item.lastName}
                </td>
                <td className="font-medium text-black dark:text-white p-2.5 xl:p-5">{item.email}</td>
                <td className="font-medium text-black dark:text-white p-2.5 xl:p-5">{item.phone}</td>
                <td className="font-medium text-black dark:text-white p-2.5 xl:p-5">{item.username}</td>
                <td className="font-medium text-black dark:text-white p-2.5 xl:p-5">{item.gender}</td>
                <td className="font-medium text-black dark:text-white p-2.5 xl:p-5">
                  
                <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
       Edit
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full  my-6 mx-auto max-w-2xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-200 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                <form  onSubmit={handlesubmit}>
        <input onChange={(e) => setEdit((prev) =>({...prev, firstname : e.target.value}) )} value={edit.firstname || ''} className={styles.formcontrol} type="text" placeholder="Enter Your First Name" name="firstname" required/>
        <input className={styles.formcontrol} onChange={(e) => setEdit((prev) =>({ ...prev, lastname: e.target.value}))} value={edit.lastname || ''} type="text" placeholder="Enter Your Last Name" name="lastname" required/>
        <input  className={styles.formcontrol} onChange={(e) => setEdit((prev) => ({...prev, email: e.target.value}))} value={edit.email || ''} type="email" placeholder="Enter Your Email" name="email" required/>
        <input  className={styles.formcontrol} onChange={(e) => setEdit((prev) => ({...prev, phone : e.target.value}))}  value={edit.phone || ''}   type="text" placeholder="Phone" name="phone" required/>
        <input  className={styles.formcontrol} onChange={(e) => setEdit((prev) => ({...prev, username: e.target.value}))} value={edit.username || ''} type="text" placeholder='Username' name="username" required/>
        <input  className={styles.formcontrol} onChange={(e) => setEdit((prev) =>({...prev, gender: e.target.value}))} value={edit.gender  || ''} type="text" placeholder='Gender' name='gender' required/>
        <button type="submit" className="bg-sky-700 px-7 py-2 rounded text-white">Submit</button>
      </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
                  
                  </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center font-medium text-black dark:text-white p-4">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Users;
