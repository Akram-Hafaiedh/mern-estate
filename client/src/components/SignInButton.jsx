/* eslint-disable react/prop-types */
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { app } from "../firebase";

export const SignInButton = ({ providerId, children }) => {


    const providers = {
        google: GoogleAuthProvider,
        facebook: FacebookAuthProvider,
        github: GithubAuthProvider,
        twitter: TwitterAuthProvider,
    }
    const authenticateWithButton = async (providerId) => {

        try {
            const auth = getAuth(app);
            const provider = new providers[providerId];
            const result = await signInWithPopup(auth, provider)
            console.log(result);

        } catch (error) {

            console.log(error);
        }
        // return result
    }
    const handleButtonClick = () => {
        authenticateWithButton(providerId)
    }
    return (
        <button
            type="button"
            className={`${providerId === 'google' ? 'text-red-900 bg-white px-4 py-3 font-semibold'
                : providerId === 'facebook' ? 'text-blue-600 bg-white p-3 font-semibold'
                    : providerId === 'twitter' ? 'text-sky-500 bg-white p-3 font-semibold' : 'text-gray-800 bg-white p-3 font-semibold'
                }` + ' rounded-md w-10 flex justify-center items-center shadow-lg'}
            onClick={handleButtonClick}>
            {children}
        </button>
    );
}

export default SignInButton;
