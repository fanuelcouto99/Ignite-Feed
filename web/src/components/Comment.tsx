import { ThumbsUp, Trash } from "@phosphor-icons/react";

export function Comment() {
    return (
        <div className="">
            <img
                src="https://github.com/trajano177.png"
                className=""
            />

            <div className="">
                <div className="">
                    <header className="">
                        <div className="">
                            <strong>Matheus Trajano</strong>
                            <time title='11 de Maio ás 12:25h' dateTime='2023-05-11 12:25:00' className="text-sm text-gray-400">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button
                            className=""
                            title="Deletar comentário"
                        >
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Fanuel, parabéns!!! 👏👏</p>
                </div>

                <footer className="">
                    <button>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
};