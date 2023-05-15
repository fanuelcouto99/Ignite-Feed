import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

interface PostProps {
    author: {
        avatarUrl: string;
        name: string;
        office: string;
    };
    content: {
        type: string,
        content: string
    }[];
    publisedAt: Date;
};

const comments = [
    1,2
];

export function Post({ author, content, publisedAt }: PostProps) {

    const publishedDateFormatted = format(publisedAt, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });
    const publishedDateRelativeToNow = formatDistanceToNow(publisedAt, { locale: ptBR, addSuffix: true });

    return (
        <article className="post bg-gray-800 rounded-lg p-10">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Avatar src={author.avatarUrl} />

                    <div className="flex flex-col">
                        <strong className="text-gray-100 leading-6">
                            {author.name}
                        </strong>
                        <span className="text-sm text-gray-400 leading-6">
                            {author.office}
                        </span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publisedAt.toISOString()} className="text-sm text-gray-400">
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className="leading-8 text-gray-300 mt-6">
                {content.map((line, index) => {
                    if (line.type === 'paragraph') {
                        return (
                            <p className="mt-4" key={index}>
                                {line.content}
                            </p>
                        )
                    } else if (line.type === 'link') {
                        return (
                            <p className="mt-4" key={index}>
                                <a href="#" className="font-bold text-green-500 hover:text-green-300">
                                    {line.content}
                                </a>
                            </p>
                        )
                    }
                })}
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
                {comments.map((comment, index) => {
                    return (
                        <Comment key={index}/>
                    )
                })}
            </div>
        </article>
    );
};