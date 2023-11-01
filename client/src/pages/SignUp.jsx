import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {

    const [formData, setFormData] = useState({})
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData(
            {
                ...formData,
                [e.target.id]: e.target.value
            })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        // const res = await fetch('/api/auth/signup', formData)

        setLoading(true);
        const res = await fetch('/api/auth/signup', {
            method: "POST", //*GET, POST, PUT, DELETE, etc
            headers: {
                "Content-Type": "application/Json",
                //* "Content-Type":"application/x-www-form-urlencoded"
            },
            body: JSON.stringify(formData),  //*parses JSON response into native JS object
        })
        const data = await res.json(); //* convert the response to JSON

        if (data.success === false) {
            setError(data.message);
            setLoading(false);
            return;
        }
        setLoading(false);
        setError(null);
        navigate('/signup')
        console.log(data);
    }
    return (
        <div className="max-w-lg p-3 mx-auto">
            <h1 className="text-3xl font-bold text-center my-7">SignUp</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input onChange={handleChange} type="text" name="username" id="username" placeholder="username"
                    className="p-3 border rounded-lg" />
                <input onChange={handleChange} type="email" name="email" id="email" placeholder="email"
                    className="p-3 border rounded-lg" />
                <input onChange={handleChange} type="password" name="password" id="password" placeholder="password"
                    className="p-3 border rounded-lg" />
                <div className='flex justify-end mr-4 text-sm text-blue-800'>
                    {/* FIXME: FONCTIONALITY NOT ADDED YET */}
                    <Link to="/recover">forgot your password?</Link>
                </div>
                <button
                    disabled={loading}
                    className="p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-90 disabled:opacity-80" type="submit"
                >{loading ? 'Loading' : 'Sign up'}</button>
            </form>
            <div className='flex gap-2 mt-3 ml-4 text-sm'>
                <p>have an acccount ?</p>
                <Link to="/sign-in">
                    <span className='text-blue-800'>Sign in</span>
                </Link>

            </div>
            {error && <p className='mt-5 text-red-500'>{error}</p>}
        </div>
    );

}