import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <div className="bg-gray-800 flex justify-center py-5">
            <img
                src={igniteLogo}
                alt='Logotipo do Ignite'
                className='h-8'
            />
        </div>
    );
};