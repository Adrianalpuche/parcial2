import { ChangeEventHandler, createContext } from "react";

export interface EmployeeForm {
  name: string;
  birthdate: Date;
  position: string; // Gerente, Desarrollador jr, Desarrollador sr, Soporte o Lider de proyecto
  email: string;
  phone: string;
  photo: string; // ruta de la imagen
}

const defaultBirthdate = new Date("0000-00-00");

export const employeeInitialState: EmployeeForm = {
  name: '',
  birthdate: defaultBirthdate,
  position: '', // Gerente, Desarrollador jr, Desarrollador sr, Soporte o Lider de proyecto
  email: '',
  phone: '',
  photo: '', // ruta de la imagen
}

export interface EmployeeContextData {
  handleChange: ChangeEventHandler<HTMLInputElement> | null,
  data: EmployeeForm,
}

const contextData: EmployeeContextData = {
  data: employeeInitialState,
  handleChange: null,
}

export const EmployeeContext = createContext<EmployeeContextData>(contextData);