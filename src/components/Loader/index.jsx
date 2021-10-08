import './style.css'

function Loader(props) {
    return (
        <div>
            <div className="py-1 d-flex justify-content-center">
                <div className="loader"></div>
            </div>
            {props.texto}
        </div>
    )
}

export default Loader