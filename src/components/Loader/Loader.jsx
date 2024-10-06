import "./Loader.css"

export default function Loader({ number }) {
    return (
        <div className={`loader-${number}`}></div>
    )
}