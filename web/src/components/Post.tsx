export function Post() {
    return (
        <article className="">
            <header>
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

            <div className="">
                <p>Fala galeraa 👋 </p>
                <p>Acabei  de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite, evento da RocketSeat.</p>
                <p>👉 <a href="#">github.com/fanuelcouto99</a></p>
                <p>👉 <a href="#">#novoprojeto #ignite #rocketseat</a></p>
            </div>
        </article>
    );
};