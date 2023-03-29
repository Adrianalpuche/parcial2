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
          <form onSubmit={change} className='form'>
            <div className="employeeName">
              <label className="block text-white font-bold text-sm  mb-2">Nombre del empleado</label>
              <input
                className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bor" 
                type="text" 
                placeholder='User' 
                name='name' 
                value={name} onChange={handleChange} />
            </div>

            <div className="birthDate">
              <label className="block text-white font-bold text-sm  mb-2">Fecha de nacimiento</label>
              <input
                className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bor" 
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
                className='border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bor" '>
                <option value={1} >Gerente</option>
                <option value={2} >Desarrollador jr</option>
                <option value={3} >Desarrollador sr</option>
                <option value={4} >Soporte</option>
                <option value={5} >Lider de proyecto</option>
              </select>
            </div>
           
            <div className="email">
              <label className="block text-white font-bold text-sm  mb-2">Email</label>
              <input
                className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bor" 
                type="email" 
                placeholder='email' 
                name='email'  
                value={email} onChange={handleChange}/>
            </div>

            <div className="phone">
              <label className="block text-white font-bold text-sm  mb-2">Telefono</label>
              <input
                className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bor" 
                type="text" 
                placeholder='teléfono' 
                name='phone' 
                value={phone} onChange={handleChange}/>
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
              </button>
            </div>
          </form>

          <div>
            <div>
              <h4>Nombre: </h4>
              <label>{name}</label>
            </div>

            <div>
              <h4>Fecha de nacimiento: </h4>
              <label>{birthdate}</label>
            </div>

            <div>
              <h4>Puesto: </h4>
              <label>{position}</label>
            </div>

            <div>
              <h4>Correo: </h4>
              <label>{email}</label>
            </div>

            <div>
              <h4>Teléfono: </h4>
              <label>{phone}</label>
            </div>

           <div>
              <h4>Foto:</h4>
              {imagePreview && <img src={imagePreview} alt="Employee photo" />}
           </div>
          </div>

        </EmployeeContext.Provider>
      </div>
    )
}

export default Formulario