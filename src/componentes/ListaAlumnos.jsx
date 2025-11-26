import { Avatar } from "./avatar"
import { Alumno } from "./Alumno"

export function ListaAlumnos({ datosAlumnos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {datosAlumnos.map((alumno, index) => (
        <Alumno
          key={index}
          nombre={alumno.nombre}
          apellido={alumno.apellido}
          grupo={alumno.grupo}
          promo={alumno.promo}
        >
          {alumno.url && <Avatar url={alumno.url} />}
        </Alumno>
      ))}
    </div>
  );
}
