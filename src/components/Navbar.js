import Dropdown from "./Dropdown";
import logo from '../images/musimatch_logo.png';

const items = [
    {
        id: 1,
        value: 'Home',
        href: '/',
    },
    {
        id: 2,
        value: 'Users management',
        href: '/users/all',
    },
    {
        id: 3,
        value: 'Statistics',
        href: '/statistics',
    },
];

function Navbar() {
    return (
        <div className="bg-[#36213E] w-full h-full flex justify-between px-8 py-6 items-center">
            <img className="w-20 h-20" src={logo}/>
            <h1 className="text-4xl font-bold text-[#FFF699] h-[120px] flex justify-center items-center">MusiMatch - Web managment</h1>
            <div>
                <Dropdown items={items}/>
            </div>
            

        </div>
    );
  }
  
  export default Navbar;