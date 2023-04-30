'use client'
import React, { useState, useEffect } from 'react'
import './Topbar.css'
import './Topbar.scss'
import Logo from '../../../../public/images/Logo.jpg'
import SearchLogo from '../../../../public/images/search.png'
import swiperProductData from '../../SwiperProductSlider/SwiperProductSliderData'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
//import MobileMenu from '../MobileMenu/Mobile-Menu'
//import MobileMiniShoppingBasket from '../MobileMiniShoppingBasket/MobileMiniShoppingBasket'
import Link from 'next/link';
import Image from 'next/image';


export default function Topbar() {

    const [getIsLogin, setGetIsLogin] = useState(null)
    const [getUserName, setGetUserName] = useState(null)
    const [searchValue, setSearchValue] = useState(null)
    const [allProducts, setAllProducts] = useState(swiperProductData)

    useEffect(() => {
        setGetIsLogin(localStorage.getItem('isLogin'))
        setGetUserName(localStorage.getItem('userName'))

    }, [])


    useEffect(() => {
        setGetIsLogin(localStorage.getItem('isLogin'))
        setGetUserName(localStorage.getItem('userName'))
    }, [getIsLogin,
        getUserName])





    return (
        <div className='topbar-container'>
           
            {/* <MobileMenu/> */}
            <Button className='reg-login-btn'>
                {getIsLogin ? (
                    <Link href='/'>
                        {getUserName}
                    </Link>
                ) : (
                    <Link href='/'>
                        ورود | ثبت نام
                    </Link>
                )}
            </Button>

            <div className='search-bar'>
                                    
            <div className={`searchAllItems ${searchValue && "active"}`}>
                    <div className="searchAllItems-overflow scroll-Body">

                        <ul className='searchAllItems-list'>
                            {

                                allProducts
                                    .filter(product => product.title.includes(searchValue)) ? (
                                    allProducts
                                        .filter(product => product.title.includes(searchValue))
                                        .map(product => (
                                            <Link href='/'>
                                            <li className='searchAllItems-listitem'>
                                                <img src={product.img} alt="" />
                                                <span>{product.title}</span>
                                                <span>{Number(product.price).toLocaleString()} تومان</span>
                                            </li>
                                            </Link>

                                        ))
                                ) : (
                                    <h3>محصولی یافت نشد!</h3>
                                )

                            }
                        </ul>
                    </div>
            </div>

            <div className="search-bar-leftside">
                    <FormControl sx={{ minWidth: 120 }}>
                        <InputLabel htmlFor="grouped-select" sx={{ fontFamily: "IRsans-web" }}>دسته بندی</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Grouping" 
                                sx={{ fontFamily: "IRsans-web", color: "var(--darker-gray)" }} >
                            <MenuItem value="">
                                <em>هیچ</em>
                            </MenuItem>

                            <MenuItem sx={{ fontFamily: "IRsans-web" }} value={1}>کالای دیجیتال</MenuItem>
                            <MenuItem sx={{ fontFamily: "IRsans-web" }} value={2}>آرایشی و بهداشتی</MenuItem>
                            <MenuItem sx={{ fontFamily: "IRsans-web" }} value={3}>مد و پوشاک</MenuItem>
                            <MenuItem sx={{ fontFamily: "IRsans-web" }} value={4}>ابزار اداری</MenuItem>
                            <MenuItem sx={{ fontFamily: "IRsans-web" }} value={5}>لوازم خانه و آشپزخانه</MenuItem>
                            <MenuItem sx={{ fontFamily: "IRsans-web" }} value={6}>کودک و نوزاد</MenuItem>
                            <MenuItem sx={{ fontFamily: "IRsans-web" }} value={7}>لوازم و تحریر</MenuItem>
                        </Select>
                    </FormControl>
                    <Button className='search-btn'>
                        <Image src={SearchLogo} width={50} height={50}
                               className="search-logo" alt="" />
                    </Button>
            </div>


                <input type="text" className='search-input' 
                       onChange={event => setSearchValue(event.target.value)}
                       placeholder='نام کالا، برند و یا دسته مورد نظر خود را وارد کنید...' />







            </div>
            


            <Link href="/">
                <Image src={Logo} width={150} height={150} className="logo" alt="" />
            </Link>
        
        </div>
    )
}
