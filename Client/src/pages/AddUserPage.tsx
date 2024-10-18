import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

interface IForm {
  name: string,
  email: string,
  phone: string,
  address: string
}

const AddUser = () => {


  const  [formValue, setFormValue] = useState<IForm>({
     name: '',
    email: '',
    phone: '',
    address: ''
  })


  const handleSubmit = async () => {
      try {
          const {data} = await axios.post('http://localhost:3000/addUser', {
            name: formValue.name,
            email: formValue.email,
            phone: formValue.phone,
            address: formValue.address
          })
      } catch (error) {
          console.log(error)
      }
  }

  return (
  <>
  <div className="bg-gray-100 p-10">
  <div>
    <h1 className="text-2xl text-center font-bold  p-2  mb-5 ">Ingresar nuevo usuario</h1>
  </div>
<form className="w-72 mx-auto">
  <div className="relative z-0 w-full mb-5 group">
      <input value={formValue.name} onChange={(e) => setFormValue({...formValue, name: e.target.value})} type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={formValue.email} onChange={(e) => setFormValue({...formValue, email: e.target.value})} type="email" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo electrónico</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={formValue.phone} onChange={(e) => setFormValue({...formValue, phone: e.target.value})} type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono</label>
  </div>
  <div className="grid md:grid-cols-1 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" value={formValue.address} onChange={(e) => setFormValue({...formValue, address: e.target.value})} name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección</label>
    </div>

  </div>

  <div className="text-center">
  <button onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear nuevo usuario</button>
  </div>
  <div className="text-center my-5">
  <Link to={"/"}>
  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Volver</button>
  </Link>
  </div>
</form>
</div>
</>
  )
}

export default AddUser
