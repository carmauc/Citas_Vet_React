import React from "react";

import { useState, useEffect } from "react";
import Error from "./Error";
import Paciente from "./Paciente";

const Formulario = ({pacientes, setPacientes, mascota, setMascota}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [tipo, setTipo] = useState ("");

  const [error, setError] = useState(false);

  useEffect (() => {
    if (Object.keys(mascota).length > 0){
      setNombre(mascota.nombre)
      setTipo (mascota.tipo)
      setPropietario(mascota.propietario)
      setEmail(mascota.email)
      setFecha(mascota.fecha)
      setSintomas(mascota.sintomas)

    }
  }, [mascota])


  const generarid = () => {
    const random = Math.random().toString(24).substr(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDACION DE FORMULARIO
    if ([nombre, tipo, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay un campo vacio");
      setError(true);
      return;
    }

    setError(false);

    // Objeto de Paciente
    const objetoPaciente = {
      nombre,
      tipo,
      propietario,
      email,
      fecha,
      sintomas
    };
    // if para editar registro
    if (mascota.id) {
      //editando registro
      objetoPaciente.id = mascota.id
      const pacienteactualizado = pacientes.map (mascotaState => mascotaState.id === 
        mascota.id ? objetoPaciente : mascotaState)

        setPacientes(pacienteactualizado)
        setMascota ({})          // elimina informacion del hook en memoria

      
      
    } else {
      // Nuevo Registro
      // como no tengo el id en objeto paciente lo creo en este punto
      objetoPaciente.id = generarid(),
         // toma una copia del objeto y le agrega al final objeto paciente
    setPacientes([...pacientes, objetoPaciente]);
      
    }



 
    //reiniciar formulario para que quede vacio para un proximo paciente
    setNombre("");
    setPropietario("");
    setTipo ("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-bold text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-xl mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-emerald-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>TODOS LOS CAMPOS SON OBLIGATORIOS</p>
          </Error>
        )}
        <div className="mb-5">
          <label htmlFor="mascota" className="block font-medium text-gray-700 uppercase">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            // eventos de react
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="mascota" className="block font-medium text-gray-700 uppercase">
            Tipo Mascota
          </label>
<div className="flex justify-evenly">
    <div className="flex items-center border-2 w-40 pl-4 mt-2 placeholder-gray-400 rounded-md">
    <input id="radioperro" 
    type="radio" 
    value="1" 
    className="w-6 h-4 accent-green-600 cursor-pointer"
    checked = {tipo==1 ? true: false } 
    onChange={(e) => setTipo(e.target.value)}
    />
    <label for="radioperro" 
    className="py-4 ml-2 w-full text-sm font-medium text-gray-400">Perro</label>
</div>

<div className="flex items-center border-2 w-40 pl-4 mt-2 placeholder-gray-400 rounded-md">
    <input id="radiogato" 
    type="radio" 
    value="2"
    className="w-6 h-4 accent-green-600 cursor-pointer"
    checked = {tipo==2 ? true: false }
    onChange={(e) => setTipo(e.target.value)}
    />
    <label for="radiogato" 
    className="py-4 ml-2 w-full text-sm font-medium text-gray-400">Gato</label>
</div>
</div>

        
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block font-medium text-gray-700 uppercase"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block font-medium text-gray-700 uppercase">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block font-medium text-gray-700 uppercase">
            FECHA DE ATENCIÓN
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block font-medium text-gray-700 uppercase">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los Sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          className=" bg-emerald-600 w-full p-3 text-white uppercase font-bold hover:bg-emerald-800 cursor-pointer transition-all"
          value={mascota.id ? "Editar Paciente" : "Agregar Paciente"}
        ></input>
      </form>
    </div>
  );
};

export default Formulario;