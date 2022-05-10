import {useState} from 'react'

function Input({type, name, callback}) {
    const [value, setValue] = useState("");
    return (
        <>
            <input className="border-[1px] border-[#05a] rounded px-2" type={type} name={name} onChange={(e)=> setValue(e.target.value)}></input>
        </>
    )
}

export default Input;