import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSucces, signInFailure } from '../redux/features/user/userSlice'
// import OAuth from '../components/OAuth';
// import Meta from '../components/Meta';
import PrimaryButton from '../components/PrimaryButton';
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';



import SignInButton from '../components/SignInButton';




export default function SignIn() {

    const [formData, setFormData] = useState({})
    const { loading, error } = useSelector((state) => state.user)
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        // const res = await fetch('/api/auth/signup', formData)

        // setLoading(true);
        dispatch(signInStart());
        const res = await fetch('/api/auth/signin', {
            method: "POST", //*GET, POST, PUT, DELETE, etc
            headers: {
                "Content-Type": "application/Json",
                //* "Content-Type":"application/x-www-form-urlencoded"
            },
            body: JSON.stringify(formData),  //*parses JSON response into native JS object
        })
        const data = await res.json(); //* convert the response to JSON

        if (data.success === false) {
            // setError(data.message);
            // setLoading(false);
            dispatch(signInFailure(data.message));
            return;
        }
        // setLoading(false);
        // setError(null);
        dispatch(signInSucces(data))
        console.log(data);
        // data = {
        //         "_id": "65419fd1b2de474da8cd4ce3",
        //         "username": "catig",
        //         "email": "jonadityko@mailinator.com",
        //         "password": "$2b$10$hEPVct6VPnu4O4mQ/dTyI.m6MKSwWpxi/8jFUyRdALPGJxQozkwpq",
        //         "createdAt": "2023-11-01T00:46:09.093Z",
        //         "updatedAt": "2023-11-01T00:46:09.093Z",
        //         "__v": 0
        //        }
        navigate('/')
    }
    return (
        <div className="max-w-lg p-3 mx-auto">
            <h1 className="text-3xl font-bold text-center my-7">Sign In</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* <input onChange={handleChange} type="text" name="username" id="username" placeholder="username"
                    className="p-3 border rounded-lg" /> */}
                <input onChange={handleChange} type="email" name="email" id="email" placeholder="email"
                    className="p-3 border rounded-lg" />
                <input onChange={handleChange} type="password" name="password" id="password" placeholder="password"
                    className="p-3 border rounded-lg" />
                <div className='flex justify-end mr-4 text-sm text-blue-800'>
                    <Link to={"/recover"}>forgot your password?</Link>
                </div>
                <PrimaryButton className='px-4 py-3 font-semibold text-white bg-slate-700' processing={loading}>
                    {loading ? 'Loading' : 'Sign in'}
                </PrimaryButton>
                {/* <button
                    disabled={loading}
                    className="p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-90 disabled:opacity-80" type="submit"
                >{loading ? 'Loading' : 'Sign in'}</button> */}
                {/* <OAuth /> */}
                {/* <Meta /> */}
                <div className='flex justify-center gap-3'>
                    <SignInButton providerId="facebook"  >
                        <FaFacebookF />
                    </SignInButton>
                    <SignInButton providerId="twitter"  >
                        <FaTwitter />
                    </SignInButton>
                    <SignInButton providerId="google"  >
                        <FaGoogle className='flex-shrink-0' />
                    </SignInButton>
                    <SignInButton providerId="github" >
                        <FaGithub />
                    </SignInButton>
                </div>

            </form>
            <div className='flex gap-2 mt-3 ml-4 text-sm'>
                <p>have an acccount ?</p>
                <Link to={"/sign-up"}>
                    <span className='text-blue-800'>Sign up</span>
                </Link>

            </div>
            {error && <p className='mt-5 text-red-500'>{error}</p>}
        </div>
    );

}