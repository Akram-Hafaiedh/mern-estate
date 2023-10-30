import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="shadow-md bg-slate-200">
            <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
                <Link to="./">
                    <h1 className="flex flex-wrap text-sm font-bold sm:text-xl">
                        <span className="text-slate-500">My</span>
                        <span className="text-slate-700">Estate</span>
                    </h1>
                </Link>

                <form className="flex items-center rounded-lg bg-slate-100">
                    <label className='relative block'>
                        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                            <FaSearch className='w-5 h-5 fill-slate-300' />
                        </span>
                        <input type="text" placeholder="Search..." name="" id=""
                            className="w-24 py-2 pr-3 bg-white rounded-md pl-9 placeholder:text-slate-400 placeholder:italic focus:outline-none sm:w-64"
                        />

                    </label>
                </form>
                <ul className='flex gap-3'>
                    <Link to="/">
                        <li className='hidden hover:underline sm:inline'>Home</li>
                    </Link>
                    <Link to="/about">
                        <li className='hidden hover:underline sm:inline'>About</li>
                    </Link>
                    <Link to="/sign-in">
                        <li className='hover:underline '>Sign In</li>
                    </Link>
                </ul>
            </div>
        </header>
    );
}

