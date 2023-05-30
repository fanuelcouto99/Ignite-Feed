import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <div className="bg-gray-800 flex items-center justify-center py-5 gap-2">
            <img
                src={igniteLogo}
                alt='Logotipo do Ignite'
                className='h-8'
            />
            <span>
                Ignite Feed
            </span>
        </div>
    );
};