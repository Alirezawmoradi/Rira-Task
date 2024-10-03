import Image from "next/image";
export const Header: React.FC = () => {
    return (
        <header className="border-b border-gray-700 border-opacity-5 mt-10">
            <div className="container xl:flex gap-5 items-center justify-center">
                <div className='flex items-center justify-center gap-5'>
                    <Image src='/images/rira-logo.png' alt='rira-logo' width={60} height={60}/>
                    <h1 className='xl:text-3xl md:text-2xl font-extrabold text-gray-600'>Rira Frontend Task</h1>
                </div>
            </div>
        </header>
    );
};