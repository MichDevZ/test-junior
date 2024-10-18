import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IForm } from "../pages/AddUserPage"



const Table = () => {

    const [users, setUsers] = useState<IForm[]>()
    const [handleData, setHandleData] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get('http://localhost:3000/getAllUsers');
            setUsers(data)
          }
          fetchData()    

    }, [handleData])
    

    const deleteUser = async (id: string) => {
        const {data} = await axios.delete("http://localhost:3000/deleteUser", {
            data: {
                _id: id
            }
        })

        if (data) {
            setHandleData(!handleData)
        }
    }


  return (
     users ? (
    <>

    <div className="relative overflow-x-auto">
        <div className="flex justify-between mb-5 items-center">
            <h1 className="text-2xl font-bold">Usuarios</h1>
            <Link to={"/AddUser"}>
            <button className="bg-blue-600 text-white text-sm p-2">
                Agregar usuario
            </button>
            </Link>
        </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Eliminar
                </th>
                <th scope="col" className="px-6 py-3">
                    Editar
                </th>
            </tr>
        </thead>
        <tbody>
            {
                users?.map(user => (

            <tr key={user._id} className="bg-white ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {user.name}
                </th>
                <td className="px-6 py-4">
                    {user.email}
                </td>
                <td className="px-6 py-4">
                    {user.phone}
                </td>
                <td className="px-6 py-4">
                    {user.address}
                </td>

                <td className="px-6 py-4">
                    <button  onClick={() => deleteUser(user._id)} className="bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-600 size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </td>
                <td className="px-6 py-4">
                    <Link to={"/EditUser"} state={
                     {  _id: user._id,
                        name: user.name, 
                        email: user.email, 
                        phone: 
                        user.phone, 
                        address:user.address}
                    } >
                    <button className="bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        </button>
                    </Link>
                </td>
            </tr>
                ))
            }

            
        </tbody>
    </table>
</div>
</>
        
     ) : (
        <div role="status">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>
     )
  )
}

export default Table
