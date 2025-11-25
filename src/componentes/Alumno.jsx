
import "../App.css"

export function Alumno({nombre, apellido="null", promo ="null", grupo="null", children}){
    return(
        <div className="carta">
            {children}
            <div className="divNombre">
                {nombre} {apellido}
                <br />
                {grupo} {promo}
            </div>
        </div>
    )

}

