import React from "react";

import Paciente from "./Paciente";
// h-screen: tamaño ajustado
// overflow y scroll: genera doble barra de desplazamiento
const ListadoPacientes = ({ pacientes, setMascota, eliminarPaciente }) => {
  // console.log(pacientes);

  // pacientes && pacientes.length usamos un ternario si hay muestra listado pacientes si no muestra no hay pacientes
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-bold text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-emerald-600 font-bold">
              {" "}
              Pacientes y Citas
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setMascota={setMascota}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className=" font-bold text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-emerald-600 font-bold">
              {" "}
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
