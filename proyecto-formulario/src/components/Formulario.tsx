// @ts-nocheck
import React, {createContext, useContext, useState,FormEvent,useReducer} from 'react';
import './../css/style.css';
import useForm from '../hooks/useForm.ts';
import { EmployeeContextData, employeeInitialState, EmployeeContext, EmployeeForm } from '../hooks/employeeContext.ts';
import RolesMenu from './RolesMenu.tsx';


function Formulario(){

  // const { data, handleToggle } = useContext<EmployeeContextData>(EmployeeContext);
  // const [employeeData, setEmployeeData] = useState<EmployeeForm>(data);

  const [data, handleChange] = useForm<EmployeeForm>(employeeInitialState);
  const {name, birthdate , position, email,phone,photo} = data;
  const [state, setState] = useState(false);
  const [imagePreview, setImagePreview] = useState('');

  const change = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState(!state);
  };

  const handleImageChange = (e) => {
  const selectedFile = e.target.files[0];
  handleChange(e); // call the handleChange function to update the `photo` state
  setImagePreview(URL.createObjectURL(selectedFile)); // set the image preview URL
  }
 
  const contextData : EmployeeContextData = {
    data,
    handleChange
  };

    return(
      <div>
        <EmployeeContext.Provider value={contextData}>
          <div className='flex justify-center items-center h-screen'>
          <form onSubmit={change} className='form' className="bg-blue-900 shadow-2xl shadow-indigo-800 px-8 pt-6 pb-8 mb">
            <div className="employeeName" className='mb-4'>
              <label className="block text-white font-bold text-sm  mb-2">Nombre del empleado</label>
              <input
                className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-3" 
                type="text" 
                placeholder='User' 
                name='name' 
                value={name} onChange={handleChange} />
            </div>

            <div className="birthDate">
              <label className="block text-white font-bold text-sm  mb-2">Fecha de nacimiento</label>
              <input
                className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-3" 
                type="date" 
                name='birthdate'  
                value={birthdate} onChange={handleChange}/>
            </div>          

            <div className="jobRole">
              <label className="block text-white font-bold text-sm  mb-2">Puesto de trabajo</label>
              <select
                name="position" 
                value={position}
                onChange={handleChange}
                className='border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-3'>
                <option value={1} >Gerente</option>
                <option value={2} >Desarrollador jr</option>
                <option value={3} >Desarrollador sr</option>
                <option value={4} >Soporte</option>
                <option value={5} >Lider de proyecto</option>
              </select>
            </div>
           <div className='flex justify-between space-x-1'>
            <div className="email">
              <label className="block text-white font-bold text-sm  mb-2">Email</label>
              <input
                className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-3" 
                type="email" 
                placeholder='email' 
                name='email'  
                value={email} onChange={handleChange}/>
            </div>

            <div className="phone">
              <label className="block text-white font-bold text-sm  mb-2">Telefono</label>
              <input
                className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-3" 
                type="text" 
                placeholder='teléfono' 
                name='phone' 
                value={phone} onChange={handleChange}/>
            </div>
            </div>

            <div className="image">
              <label className= "block text-white font-bold text-sm  mb-2">Imagen</label>
              <input 
                type="file" 
                name="photo" 
                accept="image/png, image/jpeg" 
                onChange={handleImageChange}
              />
            </div>

            <div className="state">
              <button className={state ? "active" : ""} onClick={handleChange}>
                {state ? "Activado" : "Desactivado"}
                {console.log(state)}
              </button>
            </div>
          </form>
          </div>
          

          <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto my-auto text-center '>
              <div>
              {imagePreview && <img src={imagePreview} alt="Employee photo" className='rounded-t-lg mb-2' />}
           </div>
            <div>
              <h4 className='text-white text-lg font-bold mb-2' >Nombre: </h4>
              <label className='text-white mb-2 text-sm'>{name}</label>
            </div>

            <div>
              <h4 className='text-white text-lg  font-bold mb-2'>Fecha de nacimiento: </h4>
              <label className='text-white mb-2 text-sm'>{birthdate}</label>
            </div>

            <div>
              <h4 className='text-white text-lg  font-bold mb-2'>Puesto: </h4>
              <label className='text-white mb-2 text-sm'>{position}</label>
            </div>

            <div>
              <h4 className='text-white text-lg  font-bold mb-2'>Correo: </h4>
              <label className='text-white mb-2 text-sm'>{email}</label>
            </div>

            <div>
              <h4 className='text-white text-lg  font-bold mb-2'>Teléfono: </h4>
              <label className='text-white mb-2 text-sm'>{phone}</label>
            </div>

         
          </div>

        </EmployeeContext.Provider>
      </div>
    )
}

export default Formulario