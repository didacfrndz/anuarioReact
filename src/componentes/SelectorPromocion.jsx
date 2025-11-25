
export function SelectorPromocion({datosPromo}){
    console.log(datosPromo)
    return(
        <div>
            <select name="select" id="select">
                <option value="" disabled selected>Seleccione un periodo</option>
                {datosPromo.map((p,index)=>(
                    <option value={p} key={index}>{p}</option>
                ))}
            </select>
        </div>
    )
}
