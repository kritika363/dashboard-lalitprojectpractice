export const addUser=async(state:any)=>{


     const res = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: state.firstname,
        lastName :state.lastname,
        email :state.email,
        phone: state.phone,
        userName:state.username,
        gender:state.gender,
      })
      });
}

// edit user
const updateuser = async(edit :any) =>{
  const res = await /* updating lastName of user with id 2 */
  fetch('https://dummyjson.com/users/2', {
    method: 'PUT', /* or PATCH */
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: edit.firstname,
      lastName :edit.lastname,
      email :edit.email,
      phone: edit.phone,
      userName:edit.username,
      gender:edit.gender,
    })
  })
}