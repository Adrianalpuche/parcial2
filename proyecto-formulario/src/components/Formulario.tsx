// @ts-nocheck
import React, {createContext, useContext, useState,FormEvent,useReducer} from 'react';
import './../css/style.css';
import useForm from '../hooks/useForm.ts';
import { EmployeeContextData, employeeInitialState, EmployeeContext, EmployeeForm } from '../hooks/employeeContext.ts';


function Formulario(){

  // const [employee,setEmployee] = useState<Employee>()

  const [data, handleChange] = useForm<EmployeeForm>(employeeInitialState);
  const {name, birthdate , position, email,phone,photo} = data;
  const [submitted, setSubmitted] = useState(false);

  const contextData : EmployeeContextData = {
    data,
    handleChange
  };

  const save = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };



    return(
      <>
        <EmployeeContext.Provider value={contextData}>
          
        </EmployeeContext.Provider>
      </>
    )
}

export default Formulario