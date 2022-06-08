import React from 'react'
import Navbar from '../components/Navbar'
import Users_all from '../components/Users_all';
import Users_data from '../components/Users_data';

function Users() {
    return (
        <>
        <Navbar />
        <Users_all/>
        <Users_data/>
        </>
    )
}

export default Users;
