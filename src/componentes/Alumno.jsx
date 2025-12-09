import { Camera, Trash, Pencil } from 'lucide-react';

export function Alumno({ nombre, apellido = "null", promo = "null", grupo = "null", children }) {
    return (
        <div className="border border-gray-300 rounded p-3 inline-flex flex-col items-center gap-3 w-auto h-auto shadow-sm bg-white">
            {children}
            <div className="text-sm leading-tight text-center font-medium text-gray-700">
                {nombre} {apellido}
                <br />
                <span className="text-xs text-gray-500">{grupo} — {promo}</span>
            </div>
            <div className="flex gap-4 mt-1 text-gray-700">
                <Camera size={20} className="cursor-pointer hover:text-blue-500 transition" />
                <Trash size={20} className="cursor-pointer hover:text-red-500 transition" />
                <Pencil size={20} className="cursor-pointer hover:text-green-500 transition" />
            </div>

        </div>
    );
}


