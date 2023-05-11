export function Post() {
    return (
        <article className="post bg-gray-800 rounded-lg p-10">
            <header className="">
                <div className="">
                    <img
                        src="https://github.com/fanuelcouto99.png"
                        className=""
                    />
                    <div className="">
                        <strong>Fanuel Couto</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='10 de Maio ás 21:31h' dateTime='2023-05-10 21:31:00'>
                    Publicado há 1h
                </time>
            </header>

            <div className="leading-8 text-gray-300 mt-6">
                <p className="mt-4">Fala galeraa 👋 </p>
                <p className="mt-4">Acabei  de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite, evento da RocketSeat.</p>
                <p className="mt-4"><a href="#" className="font-bold text-green-500 hover:text-green-300">github.com/fanuelcouto99</a></p>
                <p className="mt-4">
                    <a href="#" className="font-bold text-green-500 hover:text-green-300">#novoprojeto</a>{' '}
                    <a href="#" className="font-bold text-green-500 hover:text-green-300">#ignite</a>{' '}
                    <a href="#" className="font-bold text-green-500 hover:text-green-300">#rocketseat</a>
                </p>
            </div>
        </article>
    );
};