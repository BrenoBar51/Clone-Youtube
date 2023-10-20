export default function SideBar() {
    return (
        <div className="grid pl-6 mt-4 gap-12">
            <button className="w-fit max-h-fit hover:bg-cinza_claro hover:rounded-full">
                <box-icon name='menu' color='#000000'></box-icon>
            </button>
            <button className="grid hover:bg-cinza_claro hover:rounded-md">
                <box-icon name='home' color='#000000'></box-icon>
                <p className="text-cinza text-[14px] font-semibold">Início</p>
            </button>
            <button className="grid hover:bg-cinza_claro hover:rounded-md">
                <box-icon name='play-circle' color='#000000'></box-icon>
                <p className="text-cinza text-[14px] font-semibold">Shorts</p>
            </button>
            <button className="grid hover:bg-cinza_claro hover:rounded-md">
                <box-icon name='collection' color='#000000'></box-icon>
                <p className="text-cinza text-[14px] font-semibold">Inscrições</p>
            </button>
            <button className="grid hover:bg-cinza_claro hover:rounded-md">
                <box-icon name='library' color='#000000'></box-icon>
                <p className="text-cinza text-[14px] font-semibold">Biblioteca</p>
            </button>
        </div>
    )
}