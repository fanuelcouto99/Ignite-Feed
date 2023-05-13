interface AvatarProps {
    src: string;
    hasBorder?: boolean;
};

export function Avatar({ src, hasBorder = true }: AvatarProps) {
    return (
        <div>
            <img
                src={src}
                className={`rounded-lg ${hasBorder ? 'w-[calc(3rem+12px)] h-[calc(3rem+12px)] border-4 border-gray-800 outline outline-2 outline-green-500' : 'w-12 h-12'}`}
            />
        </div>
    );
};