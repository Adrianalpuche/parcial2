// @ts-nocheck
import React, {createContext, useContext, useState,FormEvent,useReducer} from 'react';
import useForm from '../hooks/useForm.ts';
import { EmployeeContextData, employeeInitialState, EmployeeContext, EmployeeForm } from '../hooks/employeeContext.ts';
import Formulario from './Formulario.ts';
import './../css/style.css'


function Card(){

 const {data: {
    name, 
    birthdate , 
    position, 
    email,
    phone,
    photo
}} = useContext<EmployeeContextData>(EmployeeContext);

    return(   
         <div >
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto my-auto'>
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
              {position==1 && <label className='text-white mb-2 text-sm'>Gerente</label>}
              {position==2 && <label className='text-white mb-2 text-sm'>Desarrollador Jr</label>}
              {position==3 && <label className='text-white mb-2 text-sm'>Desarrollador Sr</label>}
              {position==4 && <label className='text-white mb-2 text-sm'>Soporte</label>}
              {position==5 && <label className='text-white mb-2 text-sm'>Líder de proyecto</label>}
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
        </div>
    )
    
}

export default Card