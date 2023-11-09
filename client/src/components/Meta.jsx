import { FaFacebookF } from 'react-icons/fa';

export default function Meta() {
    return (
        <button
            // disabled={loading}
            className="flex flex-row items-center justify-center gap-2 p-3 text-white uppercase rounded-lg flex-nowrap bg-slate-700 hover:opacity-90 disabled:opacity-80" type="submit"
        >Continue with Facebook <FaFacebookF /></button>
    );
}
