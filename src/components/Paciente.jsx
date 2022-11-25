import React from "react";
const Paciente = ({ paciente, setMascota, eliminarPaciente }) => {
  const { nombre, propietario, tipo, email, fecha, sintomas, id } =
    paciente; /*otra opcion es paciente.nombre o se puede usar destruction*/
  // creo un arrow function en onclick porque de lo contrario llamaria la funcion automaticamente sin dar click

  const handleEliminar = () => {
    const respuesta = confirm("Desea eliminar Paciente");

    if(respuesta) {
      eliminarPaciente(id)
  }
};
//-------------------------------------------

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case"> {nombre} </span>
      </p>

      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Tipo de Mascota: {""}
        <span className="font-normal normal-case"> {tipo == 1 ? "Perro": "Gato" } </span>
      </p>

      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case"> {propietario} </span>
      </p>

      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-cas5r4te"> {email} </span>
      </p>

      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Fecha de Atención: {""}
        <span className="font-normal normal-case"> {fecha} </span>
      </p>

      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setMascota(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar} //  onClick={() => eliminarPaciente(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
