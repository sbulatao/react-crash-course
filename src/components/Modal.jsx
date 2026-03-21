import './Modal.css'

function Modal({ title, modalCancel, modalConfirm }) {

    // console.log(title)
    return (
        // <> empty fragments instead of <div> BETTER PRACTICE
        <>
            <div className="modal">
                <p className="modal__title">{title}</p>
                <div className="modal__buttons">
                <button onClick={modalCancel} className="btn btn__cancel">Cancel</button>
                <button onClick={modalConfirm} className="btn">Confirm</button>
                </div>
            </div>
            <div className="backdrop" />
        </>
    );
}

export default Modal;