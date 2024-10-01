

interface usertable{

  inner: {
    id: number;
  firstname: string;
  lastname:string;
  email: string;
  phone: string;
  username: string;
  gender: string;
  }

}

const TableOne = (user: usertable) => {
  if (!user || !user.inner) {
    // Handle the case where user or user.inner is undefined
    return null; // or some fallback UI
  }

  return (
    <tr>
      <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
        <h5 className="font-medium text-black dark:text-white">
          {user.inner.id}
        </h5>
      </td>
      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
        <p className="text-black dark:text-white">{user.inner.firstname} {user.inner.lastname}</p>
      </td>
      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
        <p className="text-black dark:text-white">{user.inner.email}</p>
      </td>
      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
        <p className="text-black dark:text-white">{user.inner.phone}</p>
      </td>
      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
        <p className="text-black dark:text-white">{user.inner.username}</p>
      </td>
      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
        <p className="text-black dark:text-white">{user.inner.gender}</p>
      </td>
    </tr>
  );
};


export default TableOne;
