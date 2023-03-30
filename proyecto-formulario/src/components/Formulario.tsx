// @ts-nocheck
import React, {createContext, useContext, useState,FormEvent,useReducer} from 'react';
import './../css/style.css'
import useForm from '../hooks/useForm.ts';
import { EmployeeContextData, employeeInitialState, EmployeeContext, EmployeeForm } from '../hooks/employeeContext.ts';

function Formulario(){

  const {data: {
    name, 
    birthdate , 
    position, 
    email,
    phone,
    photo
  },
    handleChange} = useContext<EmployeeContextData>(EmployeeContext); 

  // const [imagePreview, setImagePreview] = useState('');

  const handleImageChange = (e) => {
  const selectedFile = e.target.files[0];
  handleChange(e); // call the handleChange function to update the `photo` state
  setImagePreview(URL.createObjectURL(selectedFile)); // set the image preview URL
  
  return(
          <div className='flex justify-center items-center h-screen'>
            <form className='form' className="bg-blue-900 shadow-2xl shadow-indigo-800 px-8 pt-6 pb-8 mb">
              <div className="employeeName" className='mb-4'>
                <label className="block text-white font-bold text-sm  mb-2">Nombre del empleado</label>
                <input
                  className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-3" 
                  type="text" 
                  placeholder='User' 
                  name='name' 
                  value={name} onChange={handleChange}
                />
              </div>

              {/* <div className="birthDate">
                <label className="block text-white font-bold text-sm  mb-2">Fecha de nacimiento</label>
                <input
                  className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-3" 
                  type="date" 
                  name='birthdate'  
                  value={birthdate} onChange={handleChange}/>
              </div>           */}

              {/* <div className="jobRole">
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
              </div> */}
              {/* <div className='flex justify-between space-x-1'>
                <div className="email">
                  <label className="block text-white font-bold text-sm  mb-2">Email</label>
                  <input
                    className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-3" 
                    type="email" 
                    placeholder='email' 
                    name='email'  
                    value={email} onChange={handleChange}/>
                </div> */}

                {/* <div className="phone">
                  <label className="block text-white font-bold text-sm  mb-2">Telefono</label>
                  <input
                    className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-3" 
                    type="text" 
                    placeholder='teléfono' 
                    name='phone' 
                    value={phone} onChange={handleChange}/>
                </div> */}
              {/* </div> */}

              {/* <div className="image">
                <label className= "block text-white font-bold text-sm  mb-2">Imagen</label>
                <input 
                  type="file" 
                  name="photo" 
                  accept="image/png, image/jpeg" 
                  onChange={handleImageChange}
                />
              </div> */}

              {/* <div className="state">
                <button className={state ? "active" : ""} onClick={handleChange}>
                  {state ? "Activado" : "Desactivado"}
                  {console.log(state)}
                </button>
              </div> */}
            </form>
          </div> 
    )
  }
}

export default Formulario