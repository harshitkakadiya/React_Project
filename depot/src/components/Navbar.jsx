import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='hearder'>
            <div className="container flex justify-around items-center">
                
                <div>
                    <nav>
                        <ul className="flex space-x-16">
                            <li>
                                <Link className='menu_item' to="/">Home</Link>
                            </li>
                            <li>
                                <Link className='menu_item' to="/aboutus">Shop</Link>
                            </li>
                            <li>
                                <Link className='menu_item' to="/contactus">Pages</Link>
                            </li>
                            <li>
                                <Link className='menu_item' to="/contactus">Elements</Link>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
                <div>
                    <a href="">
                    <img className='h-5' src="https://depot.qodeinteractive.com/wp-content/themes/depot/assets/img/logo.png" alt="" />
                    </a>
                </div>
                <div className='right_menu'>
                    <ul className="flex space-x-5">
                        <li>
                            <a href="">Cart <span>($0)</span></a> 
                        </li>
                        <li>
                            <a className='user' href=""> <FaRegUser  className='size-3' /> Login</a>
                        </li>
                        <li>
                            <a className='user' href=""> <IoIosSearch className='size-5' /> </a>
                        </li>
                        <li>
                            <a className='user' href=""> <IoIosMenu className='size-5' /> </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
