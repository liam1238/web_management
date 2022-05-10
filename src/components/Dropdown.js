import React, {useState} from 'react';
import drop from '../images/dropdown.jpeg';
import { Link } from 'react-router-dom';

const Dropdown = ( { href, items = [], multiSelect = false }) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);

    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
            if(!multiSelect) {
                setSelection([item]);
            } else if (multiSelect) {
                setSelection([...selection, item]);
            }
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(current => current.id !== item.id);
            setSelection([...selectionAfterRemoval]);
        }
    }

    return (
        <div className="flex min-h-{38px} flex-wrap text-white relative">
            <div 
                tabIndex={0} 
                className="flex justify-between cursor-pointer w-[150px] mt-2.5" 
                role="button" 
                onKeyPress={() => toggle(!open)} 
                onClick={ () => toggle(!open)}
            >
                <div className="">
                    <img className="h-10 w-10" src={drop} />
                </div>
            </div>
            {open && (
                <ul className="p-0 m-0 w-full absolute top-10">
                    {items.map(item => (    
                        <Link to={item.href}>                        
                            <li className="dd-list-item" key={item.id}>
                                <button type="button" onClick={() => handleOnClick(item)}>
                                    <span>{item.value}</span> 
                                    {/* item.value is the items that show or hide */}
                                    
                                </button>
                            </li>
                        </Link>                   
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Dropdown;