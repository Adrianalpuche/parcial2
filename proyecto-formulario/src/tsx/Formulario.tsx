// @ts-nocheck
import React, {createContext, useContext, useState,FormEvent,useReducer} from 'react';
import './../css/style.css';


function Formulario(){

    return(
        <div className='flex justify-center items-center h-screen'>
            <form className="bg-blue-900 shadow-md shadow-indigo-800 px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                  <label className="block text-white font-bold text-sm  mb-2">Nombre del empleado</label>
                  <input
                   className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bor" 
                   type="text" 
                   placeholder='User' 
                   name='name'  />
                </div>
                <div className="mb-4">
                  <label className="block text-white font-bold text-sm  mb-2">Fecha de nacimiento</label>
                  <input
                   className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bor" 
                   type="date" 
                   name='fecha'  />
                </div>
                <div className="mb-4">
                  <label className="block text-white font-bold text-sm  mb-2">Puesto de trabajo</label>
                  <select className='border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bor" '>
                  <option value="Gerente">Gerente</option>
                    <option value="Desarrollador jr">Desarrollador jr</option>
                 <option value="Desarrollador sr">Desarrollador sr</option>
                    </select>
                </div>
                <div className='flex justify-between space-x-1'>
                <div className="mb-4">
                  <label className="block text-white font-bold text-sm  mb-2">Email</label>
                  <input
                   className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bor" 
                   type="email" 
                   placeholder='email' 
                   name='email'  />
                </div>
                <div className="mb-4">
                  <label className="block text-white font-bold text-sm  mb-2">Telefono</label>
                  <input
                   className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bor" 
                   type="tel" 
                   placeholder='telefono' 
                   name='telefono'  />
                </div>
                </div>
                <div className="mb-4">
                    <label className= "block text-white font-bold text-sm  mb-2">Imagen</label>
                    <input type="file"
                    name='image'
                    accept="image/png, image/jpeg"/>
                </div>
            </form>

        </div>
    )
}

export default Formulario