import { Comment } from "./Comment";

export function Post() {
    return (
        <article className="post bg-gray-800 rounded-lg p-10">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img
                        src="https://github.com/fanuelcouto99.png"
                        className="w-[calc(3rem+12px)] h-[calc(3rem+12px)] rounded-lg border-4 border-gray-800 outline outline-2 outline-green-500"
                    />
                    <div className="flex flex-col">
                        <strong className="text-gray-100 leading-6">
                            Fanuel Couto
                        </strong>
                        <span className="text-sm text-gray-400 leading-6">
                            Web Developer
                        </span>
                    </div>
                </div>

                <time title='10 de Maio ás 21:31h' dateTime='2023-05-10 21:31:00' className="text-sm text-gray-400">
                    Publicado há 1h
                </time>
            </header>

            <div className="leading-8 text-gray-300 mt-6">
                <p className="mt-4">Fala galeraa 👋 </p>
                <p className="mt-4">Acabei  de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite, evento da RocketSeat. o nome do projeto é Ignite Feed! 🚀</p>
                <p className="mt-4"><a href="#" className="font-bold text-green-500 hover:text-green-300">github.com/fanuelcouto99</a></p>
                <p className="mt-4">
                    <a href="#" className="font-bold text-green-500 hover:text-green-300">#novoprojeto</a>{' '}
                    <a href="#" className="font-bold text-green-500 hover:text-green-300">#ignite</a>{' '}
                    <a href="#" className="font-bold text-green-500 hover:text-green-300">#rocketseat</a>
                </p>
            </div>

            <form className="w-full mt-6 pt-6 border-t border-t-gray-600 group">
                <strong className="leading-6 text-gray-100">
                    Deixe seu feedback
                </strong>

                <textarea
                    placeholder="Deixe um comentário"
                    className="w-full h-24 p-4 rounded-lg bg-gray-900 border-none resize-none text-gray-100 leading-4 mt-4"
                />

                <footer className="invisible max-h-0 group-focus-within:visible group-focus-within:max-h-none">
                    <button
                        type="submit"
                        className="py-4 px-6 mt-4 rounded-lg border-none bg-green-500 text-white font-bold cursor-pointer hover:bg-green-300 transition-colors duration-100">
                        Publicar
                    </button>
                </footer>
            </form>

            <div className="mt-8">
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
};