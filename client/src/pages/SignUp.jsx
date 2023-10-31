import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <div className="max-w-lg p-3 mx-auto">
            <h1 className="text-3xl font-bold text-center my-7">SignUp</h1>
            <form className="flex flex-col gap-4">
                <input type="text" name="username" id="username" placeholder="username"
                    className="p-3 border rounded-lg" />
                <input type="email" name="email" id="email" placeholder="email"
                    className="p-3 border rounded-lg" />
                <input type="password" name="password" id="password" placeholder="password"
                    className="p-3 border rounded-lg" />
                <button className="p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-90 disabled:opacity-80" type="submit">Sign up</button>
            </form>
            <div className='flex gap-2 mt-3 ml-4'>
                <p>have an acccount ?</p>
                <Link to="/sign-in">
                    <span className='text-blue-800'>Sign in</span>
                </Link>
            </div>
        </div>
    );
}
