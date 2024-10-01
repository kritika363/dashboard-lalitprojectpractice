'use client'
import React from 'react';
import styles from "./adduser.module.css"
import { useState } from 'react';
import { addUser } from '@/app/lib/user';

const Adduserform = ({addf}:any) => {

const [state, SetState] = useState({
    firstname: '',
    lastname :'',
    email :'',
    phone: '',
    username:'',
    gender:'',
})



const addur =(e: { preventDefault: () => void; }) => {  
  e.preventDefault();
  addUser(state);
  // console.log("user kritika has been added");
  // console.log(state)
  SetState(
    {
      firstname: '',
    lastname :'',
    email :'',
    phone: '',
    username:'',
    gender:'',
    }
  )
}


  return (
    <div>
          <form className='w-1/2 flex justify-middle flex-col' onSubmit={addur}>
        <input className={styles.formcontrol} 
        onChange={(e) => SetState((prev) => ({...prev, firstname: e.target.value}))} value={state.firstname || ''} type="text" placeholder="Enter Your First Name" name="firstname" required/>
        <input className={styles.formcontrol} 
        onChange={(e) => SetState((prev) => ({...prev, lastname: e.target.value}))} value={state.lastname || ''} type="text" placeholder="Enter Your Last Name" name="lastname" required/>
        <input className={styles.formcontrol} 
        onChange={(e) => SetState((prev) => ({...prev, email: e.target.value})) } value={state.email || ''} type="email" placeholder="Enter Your Email" name="email" required/>
        <input className={styles.formcontrol} 
        onChange={(e) => SetState((prev) => ({...prev, phone : e.target.value})) } value={state.phone || ''} type="text" placeholder="Phone" name="phone" required/>
        <input className={styles.formcontrol} 
        onChange={(e) => SetState((prev) => ({...prev, username : e.target.value})) } value={state.username || ''} type="text" placeholder='Username' name="username" required/>
        <input className={styles.formcontrol} 
        onChange={(e) => SetState((prev) => ({...prev, gender : e.target.value}))  } value={state.gender || ''} type="text" placeholder='Gender' name='gender' required/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Adduserform