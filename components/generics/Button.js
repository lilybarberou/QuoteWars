export default function Button({ onClick, value }) {
    return(
        <button onClick={onClick} type="button" className="my-8 bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 rounded">
            {value}
        </button>
    )
}