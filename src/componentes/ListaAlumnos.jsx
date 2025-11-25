import { Avatar } from "./avatar"
import { Alumno } from "./Alumno"

export function ListaAlumnos({ datosAlumnos}) {
    return (
        <div>
            <Alumno
  key={index}
  nombre={alumno.nombre}
  apellido={alumno.apellido}
  grupo={alumno.grupo}
  promo={alumno.promo}
>
  {alumno.url && <Avatar url={alumno.url} />}
</Alumno>

            
        </div>
    );
}
