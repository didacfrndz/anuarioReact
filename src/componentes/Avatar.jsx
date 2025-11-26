export function Avatar({url="hola"}){
    return(
       <div className="w-40 h-40">
            <img className="w-full h-full object-cover rounded-full border-4 border-blue-300" src={url} alt="nombre" />
        </div> 
    )
}