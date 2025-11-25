export function Avatar({url="hola"}){
    return(
       <div className="divAvatar">
            <img className="avatar" src={url} alt="nombre" />
        </div> 
    )
}