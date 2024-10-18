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
  )
}

export default Table
