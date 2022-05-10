import {useState} from 'react'

function Label({label}) {
    return (
        <>
            <label className="font-semibold">{label}</label>
        </>
    )
}

export default Label;