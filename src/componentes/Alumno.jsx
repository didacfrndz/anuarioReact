


export function Alumno({nombre, apellido="null", promo ="null", grupo="null", children}){
    return(
        <div className="border border-gray-300 rounded p-3 inline-flex flex-col items-center gap-2 w-auto h-auto">
            {children}
            <div className="text-sm leading-tight text-center" >
                {nombre} {apellido}
                <br />
                {grupo} {promo}
            </div>
        </div>
    )

}

