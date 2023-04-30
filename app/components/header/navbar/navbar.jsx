'use client';
import React, { useState, useEffect } from 'react'
import './Navbar.css'
import NavbarDatas from '../NavbarDatas'
import Link from 'next/link';
import MiniShoppingBasket from '../MiniShoppingBasket/MiniShoppingBasket'

export default function Navbar() {

    const [navbarData, setNavbarData] = useState(NavbarDatas)

    return (
        <div className='navbar-container'>
            <MiniShoppingBasket/>
            <nav className='navbar1'>
                <ul className='main-menu-list'>
                    {navbarData.length && (
                        navbarData.map(nav => (
                            <li key={nav.id} className='main-menu-listitem'>
                                  <Link href={nav.link}>{nav.title}
                                  </Link>
                                {nav.submenu && (
                                    <ul className={nav.oneLine ? 'main-submenu-list2' : 'main-submenu-list'}>
                                        {nav.menus.map(submenu => (
                                            <li key={submenu.id} className={nav.oneLine ? 'main-submenu-listitem2' : 'main-submenu-listitem'}>
                                                <Link href='/' className="submenu-title">{submenu.header}</Link>
                                                <ul className='submenu-list'>
                                                    {submenu.prods.length && (
                                                        submenu.prods.map(prod => (
                                                            <li key={prod.id} className='submenu-listitem'>
                                                                <Link href={prod.link}>{prod.title}</Link>
                                                            </li>
                                                        ))
                                                    )}
                                                </ul>
                                            </li>
                                        ))}
                                        {nav.submenu && (
                                            <img className='submenu-pic' src={nav.pic} alt="" />
                                        )}
                                    </ul>
                                )}
                            </li>
                        ))
                    )}
                </ul>
            </nav>
        </div>
    )
}
