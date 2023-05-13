import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";

export function Comment() {
    return (
        <div className="mt-6 flex gap-4">
            <Avatar hasBorder={false} src="https://github.com/trajano177.png" />

            <div className="flex-1">
                <div className="bg-gray-700 rounded-lg p-4">
                    <header className="flex items-start justify-between">
                        <div>
                            <strong className="block text-sm leading-6">
                                Matheus Trajano
                            </strong>
                            <time
                                title='11 de Maio ás 12:25h'
                                dateTime='2023-05-11 12:25:00'
                                className="block text-xs leading-6 text-gray-400">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button
                            className="text-gray-400 rounded-sm hover:text-red-500"
                            title="Deletar comentário"
                        >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p className="mt-4 text-gray-300">
                        Muito bom Fanuel, parabéns!!! 👏👏
                    </p>
                </div>

                <footer className="mt-4 rounded-sm">
                    <button className="text-gray-400 flex items-center hover:text-green-300">
                        <ThumbsUp className="mr-2"/>
                        Aplaudir <span className="before:px-1 before:content-['\2022']">20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
};