
import { SelectorPromocion } from './componentes/SelectorPromocion'
import { ListaAlumnos } from './componentes/ListaAlumnos';
import { useState } from 'react';
import { Camera } from 'lucide-react';
import { Trash } from 'lucide-react';
import { Tractor } from 'lucide-react';
import { Pencil } from 'lucide-react';
function App() {
  const [promocion, setPromocion] = useState(datosPromo[0]);
  const [datos, setdatos] = useState(datosAlumnos);
  const datosPromo=["24/25","25/26","26/27"];
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
  return (
    <>
      <h1 className='border p-5 shadow' >Hola mundo</h1>
      <Camera color="black" size={18} />
      <Trash color='black' size={18}/>
      <Pencil size={18}/>
      <Tractor color='yellow' size={100}/>
      
      {/* <SelectorPromocion datosPromo={datosPromo}/> */}
      
      <ListaAlumnos datosAlumnos={datosAlumnos}/>
    </>
  )
}
function selectorFuncional(){
    const handleChange=(e)=>{
        console.log(e.target.value)
    }
    return(
        <div>
            <select name="select" id="select" onChange={handleChange}>
                <option value="" disabled selected>Seleccione un periodo</option>
                {datosPromo.map((p,index)=>(
                    <option value={p} key={index}>{p}</option>
                ))}
            </select>
        </div>
    )
}


export default App
