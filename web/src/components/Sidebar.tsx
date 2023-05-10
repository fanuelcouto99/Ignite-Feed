export function Sidebar() {
    return (
        <aside className="bg-gray-800 rounded-lg overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
                className="w-full h-[72px] object-cover"
            />

            <div className="flex flex-col items-center mt-[calc(0px-1.5rem-6px)]">
                <img
                    src="https://github.com/fanuelcouto99.png"
                    className="w-[calc(3rem+12px)] h-[calc(3rem+12px)] rounded-lg border-4 border-gray-800 outline outline-2 outline-green-500"
                />
                <strong className="mt-4 text-gray-100 leading-6">
                    Fanuel Couto
                </strong>
                <span className="text-sm text-gray-400 leading-6">
                    Web Developer
                </span>
            </div>

            <footer className="border-t border-t-gray-600 mt-6 pt-6 px-8 pb-8">
                <a href="#" className="flex items-center justify-center h-12 px-6 font-bold block bg-transparent text-green-500 border border-green-500 rounded-lg">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
};