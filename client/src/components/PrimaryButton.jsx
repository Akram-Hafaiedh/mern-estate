
// eslint-disable-next-line react/prop-types
export default function PrimaryButton({ type = 'submit', className = "", processing, children, onClick }) {

    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `inline-flex items-center gap-3 justify-center border border-gray-300 rounded-md uppercase tracking-widest shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button >
    );
}

