import AddForm from "./AddForm";
import Background from '../assets/austin-chan-ukzHlkoz1IE-unsplash.jpg';

interface Props {
    id?: string[];
    open: boolean;
    onClose?: () => void;
}

function Modal(props: Props) {
    if (!props.open) return(<></>);

    return (
        <div 
            onClick={ props.onClose } 
            className='fixed w-full h-full flex overflow-auto z-1 
            justify-center align-middle bg-center bg-cover pb-5'
            style={{ backgroundImage: `url(${ Background })`} }
        >
            <div 
                className="max-w-screen-600px w-3/5 fixed flex z-1 mt-20 bg-transparent shadow-2xl rounded"
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="w-full flex flex-col ">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                        onClick={props.onClose}>
                            X
                        </p>
                    </div>
                    <div className="flex flex-col mb-20">
                        <AddForm id={ props.id }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
