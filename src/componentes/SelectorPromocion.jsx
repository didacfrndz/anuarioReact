export function SelectorPromocion({ datosPromo, promocion, setPromocion }) {

    const handleChange = (e) => {setPromocion(e.target.value);};
    return (
        <div>
            <select value={promocion} onChange={handleChange} className="border p-2 rounded">
                <option value="todos">Ver Todo</option>
                {datosPromo.map((p, index) => (
                    <option value={p} key={index}>
                        {p}
                    </option>
                ))}
            </select>
        </div>
    );
}
