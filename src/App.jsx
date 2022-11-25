import React from "react";

import {useEffect, useState} from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes" 

function App() {
  const [pacientes, setPacientes] = useState([]);
  // nueva funcion para el boton editar
  const [mascota, setMascota] = useState({});


  // useEffect para obtener lo que este en local Storage
  useEffect (() => { 
    const obtenerLocalStorage = ()=>{
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? []; // si no hay nada en ls agregale un arreglo vacio
      setPacientes(pacientesLS)
    }
    obtenerLocalStorage();
  },[]);
  
  // nuevo use Effect para almacenar en local storage, el orden en que se definen los useEffect es el orden en que se ejecutan
  useEffect (() => {
// console.log("componente listo, eliminado o editado");
localStorage.setItem ('pacientes', JSON.stringify (pacientes))
  }, [pacientes])

  // nueva funcion para el boton eliminar
  const eliminarPaciente = id =>{
    const pacientesActualizados = pacientes.filter (mascota => mascota.id !== id)
    setPacientes(pacientesActualizados)
  }



  return (
  <div className="container mx-auto mt-20">
    <Header />

    <div className="mt-12 flex">
    <Formulario 
      pacientes={pacientes}
      setPacientes={setPacientes}
      mascota={mascota}
      setMascota={setMascota}
          />

    <ListadoPacientes 
    pacientes={pacientes}
    setMascota={setMascota}
    eliminarPaciente = {eliminarPaciente}
    />
    </div>

  </div>
  )
}

export default App
