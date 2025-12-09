import { SelectorPromocion } from './componentes/SelectorPromocion'
import { ListaAlumnos } from './componentes/ListaAlumnos';
import { FiltroNombre } from './componentes/FiltroNombre';
import { useState } from 'react';

const datosPromo = ["24/25", "25/26", "26/27"];
const datosAlumnos = [
  {
    nombre: "LaMelo",
    apellido: "Ball",
    grupo: "DAW",
    promo: "24/25",
    url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432816.png&w=350&h=254"
  },
  {
    nombre: "Miles",
    apellido: "Bridges",
    grupo: "DAW",
    promo: "25/26",
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628970.png"
  },
  {
    nombre: "Brandon",
    apellido: "Miller",
    grupo: "DAW",
    promo: "26/27",
    url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4433287.png"
  }
];

function App() {
  const [promocion, setPromocion] = useState("todos");
  const [filtroNombre, setFiltroNombre] = useState("");

  // 🔍 Filtrar alumnos por promoción, nombre o apellido
  const alumnosFiltrados = datosAlumnos.filter((alumno) => {
    const fullName = (alumno.nombre + " " + alumno.apellido).toLowerCase();
    const coincideNombre = fullName.includes(filtroNombre.toLowerCase());
    const coincidePromocion = promocion === "todos" || alumno.promo === promocion;
    return coincideNombre && coincidePromocion;
  });

  return (
    <>
      <div className="flex items-center justify-center  bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 border-4 border-gray-300 rounded-lg px-8 py-4 shadow-lg bg-white">
          LISTADO DE ALUMNOS
        </h1>
      </div>
      <SelectorPromocion datosPromo={datosPromo} promocion={promocion} setPromocion={setPromocion} />

      
      <FiltroNombre filtro={filtroNombre} setFiltro={setFiltroNombre} />

      
      <ListaAlumnos datosAlumnos={alumnosFiltrados} />
    </>
  );
}

export default App;
