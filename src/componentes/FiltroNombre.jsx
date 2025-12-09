export const FiltroNombre = ({ filtro, setFiltro }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Buscar alumno
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">🔍</span>
        <input type="text" placeholder="Escribe un nombre o apellido..." value={filtro} onChange={(e) => setFiltro(e.target.value)} className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"/>
      </div>
      <div className="mt-3 p-2 border rounded-lg bg-gray-50 text-gray-700">
        <strong>Busqueda de:</strong> {filtro || "—"}
      </div>
    </div>
  );
};