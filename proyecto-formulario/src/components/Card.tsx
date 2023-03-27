import React, {useContext, useState} from "react";
import { employeeInitialState, EmployeeContextData, EmployeeContext, EmployeeForm } from "../hooks/employeeContext";

function Card() {

  const { data, handleToggle } = useContext<EmployeeContextData>(EmployeeContext);
  const [employeeData, setEmployeeData] = useState<EmployeeForm>(data);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setEmployeeData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <React.Fragment>
      <React.Fragment>
        <h4>Nombre: </h4>
        <input type="text" name="name" value={employeeData.name} onChange={handleInputChange} />
      </React.Fragment>

      <React.Fragment>
        <h4>Fecha de nacimiento: </h4>
        <input type="text" name="birthdate" value={employeeData.birthdate.toString()} onChange={handleInputChange} />
      </React.Fragment>

      <React.Fragment>
        <h4>Puesto: </h4>
        <input type="text" name="position" value={employeeData.position} onChange={handleInputChange} />
      </React.Fragment>

      <React.Fragment>
        <h4>Correo: </h4>
        <input type="text" name="email" value={employeeData.email} onChange={handleInputChange} />
      </React.Fragment>

      <React.Fragment>
        <h4>Teléfono: </h4>
        <input type="text" name="phone" value={employeeData.phone} onChange={handleInputChange} />
      </React.Fragment>

      <React.Fragment>
        <h4>Foto:</h4>
        <input type="text" name="photo" value={employeeData.photo} onChange={handleInputChange} />
      </React.Fragment>
    </React.Fragment>
  );
}

export default Card;