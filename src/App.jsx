import './App.css'
import { SelectorPromocion } from './componentes/SelectorPromocion'
import { ListaAlumnos } from './componentes/ListaAlumnos';
function App() {
  const datosPromo=["24/25","24/25","25/26","26/27"];
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
 alumunosFiltradosPromo = datosAlumnos.filter(al => al.Promo === "24/25");
  return (
    <>
      <h1>Hola mundo</h1>
      <SelectorPromocion datosPromo={datosPromo}/>
      <ListaAlumnos datosAlumnos={alumunosFiltradosPromo}/>
    </>
  )
}

export default App
