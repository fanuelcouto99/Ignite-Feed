interface AvatarProps {
    src: string;
};

export function Avatar({ src }: AvatarProps) {
    return (
        <div>
            <img
                src={src}
                className="w-[calc(3rem+12px)] h-[calc(3rem+12px)] rounded-lg border-4 border-gray-800 outline outline-2 outline-green-500"
            />
        </div>
    );
};