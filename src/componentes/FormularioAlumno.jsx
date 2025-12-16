export function FormularioAlumno(){
    return(
        <form action="">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
            <br />
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required />
            <br />
            <label htmlFor="promo">Promoción:</label>
            <input type="text" id="promo" name="promo" required />
            <br />
            <label htmlFor="cicle">Cicle:</label>
            <input type="text" id="cicle" name="cicle" required />
            <br />
            <label htmlFor="foto">Foto Alumne:</label>
            <input type="text" id="foto" name="foto" required />
            
        </form>
    )
}