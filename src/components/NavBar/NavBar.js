import React, { useState } from 'react';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open,setOpen] = useState(false);
    const menus = [
        {id:1, name:'Home', path:'/home'},
        {id:2, name:'About', path:'/about'},
        {id:3, name:'Contact Us', path:'/contact-us'},
        {id:4, name:'Services', path:'/services'},
        {id:5, name:'Blog', path:'/blog'},
        {id:6, name:'Courses', path:'/courses'},
    ]
    return (
        <nav className='bg-orange-200 p-2'>
            <div className='h-6 w-6 md:hidden' onClick={()=> setOpen(!open)}>
                {
                    open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                }
            </div>
            <ul className={`md:flex justify-end ${open ? 'show' : 'hidden'}`}>
                {
                    menus.map(menu => <li className='p-2 hover:bg-orange-300 rounded'><a href={menu.path}>{menu.name}</a></li>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;