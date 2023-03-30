// @ts-nocheck
import React, {createContext, useContext, useState,FormEvent,useReducer} from 'react';
import useForm from '../hooks/useForm.ts';
import { EmployeeContextData, employeeInitialState, EmployeeContext, EmployeeForm } from '../hooks/employeeContext.ts';
import Formulario from './Formulario';
import Card from './Card'

function Father(){

  const [data, handleChange,isToggled,handleToggle] = useForm<EmployeeForm>(employeeInitialState);
  const {name, birthdate , position, email,phone,photo} = data;
  const [state, setState] = useState(false);

  // const change = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setState(!state);
  // };
  


  const contextData : EmployeeContextData = {
    data,
    handleChange
  };

    return(
      <div>
        <EmployeeContext.Provider value={contextData}>
          <div className='flex flex-col'>
          <div>
            <Formulario/>
          </div>
          <div className=''>
            <Card/>
          </div>
          </div>
        </EmployeeContext.Provider> 
      </div>
    )
}

export default Father