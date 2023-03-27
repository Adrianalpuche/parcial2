// @ts-nocheck
import React, {createContext, useContext, useState,FormEvent,useReducer} from 'react';
import './../css/style.css';
import useForm from '../hooks/useForm.ts';
import { EmployeeContextData, employeeInitialState, EmployeeContext, EmployeeForm } from '../hooks/employeeContext.ts';
import Card from './Card.tsx'


function Formulario(){

  // const [employee,setEmployee] = useState<Employee>()

  const [data, handleChange] = useForm<EmployeeForm>(employeeInitialState);
  const {name, birthdate , position, email,phone,photo} = data;
  const [state, setState] = useState(false);

  const contextData : EmployeeContextData = {
    data,
    handleChange
  };

  const handleToggle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState(!state);
  };


    return(
      <React.Fragment>
        <EmployeeContext.Provider value={contextData}>
          <form className='form'>
            <React.Fragment className="employeeName">
              <label className="block text-white font-bold text-sm  mb-2">Nombre del empleado</label>
              <input
                className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bor" 
                type="text" 
                placeholder='User' 
                name='name'  />
            </React.Fragment>

            <React.Fragment className="birthDate">
              <label className="block text-white font-bold text-sm  mb-2">Fecha de nacimiento</label>
              <input
                className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bor" 
                type="date" 
                name='fecha'  />
            </React.Fragment>          

            <React.Fragment className="jobRole">
              <label className="block text-white font-bold text-sm  mb-2">Puesto de trabajo</label>
              <select className='border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bor" '>
                <option value="manager">Gerente</option>
                <option value="jr">Desarrollador jr</option>
                <option value="sr">Desarrollador sr</option>
                <option value="Support">Soporte</option>
                <option value="ProjectLeader">Lider de proyecto</option>
              </select>
            </React.Fragment>

            <React.Fragment className="email">
              <label className="block text-white font-bold text-sm  mb-2">Email</label>
              <input
                className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bor" 
                type="email" 
                placeholder='email' 
                name='email'  />
            </React.Fragment>

            <React.Fragment className="phone">
              <label className="block text-white font-bold text-sm  mb-2">Telefono</label>
              <input
                className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bor" 
                type="tel" 
                placeholder='telefono' 
                name='telefono'  />
            </React.Fragment>

            <React.Fragment className="image">
              <label className= "block text-white font-bold text-sm  mb-2">Imagen</label>
              <input type="file"
                name='image'
                accept="image/png, image/jpeg"/>
            </React.Fragment>

            <React.Fragment className="state">
              <button className={state ? "active" : ""} onClick={handleToggle}>
                {state ? "Activado" : "Desactivado"}
              </button>
            </React.Fragment>
          </form>

          <Card name="testing"/>
        </EmployeeContext.Provider>
      </React.Fragment>
    )
}

export default Formulario