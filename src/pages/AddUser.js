import React from 'react'
import Navbar from '../components/Navbar';
import User from '../components/User'


function AddUser() {
    return (
        <>
            <Navbar/>
            <p className="flex justify-center font-bold border-b-2">Add a new user to the database - please fill all the fileds</p>
            <User/>
        </>


    )
}

export default AddUser;