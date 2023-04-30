import { Button } from '@mui/material'
import React, { useContext,useMemo } from 'react'
import Link from 'next/link';
import MiniProductCard from './MiniProductCard'
import shoppingIcon from '../../../../public/images/icons/bag.png'
import './MiniShoppingBasket.css'
import { CartContext } from '../../Context/ShoppingContext'
import icon1 from '../../../../public/images/icons/info-icon.png';
import Image from 'next/image';

export default function MiniShoppingBasket() {

    const GlobalState = useContext(CartContext)
    const state = GlobalState?.state;
    
    let totalPrice = 0 ;
    totalPrice = state?.reduce((total, item) => {
   return total + item.price * item.quantity;
},0)
 




    return (
        <div className='mini-shopping-basket-container'>

            <Link href="React-Shopping-Project/shoppingbasket">
                <Button className='mini-shopping-basket-button' >

                    <Image className='mini-shopping-basket-icon' src={shoppingIcon}
                           width={25} height={25} alt="" />
                    <div className="mini-shopping-basket-middle" style={!state?.length ? {width:"105px"} : null}>
                        <span className='mini-shopping-basket-title'>سبد خرید</span>
                    </div>
                    <span className="counter-product" >{state?.length ? state?.length : 0}</span>
                </Button>
            </Link>
            <div className="products-list">
                <div className="scrollbar">

                    <ul className="ul-basket">
                        
                    {
                        useMemo(() =>
                        
                        state?.length ? (
                            state.map(item => (
                                <MiniProductCard key={item.id} {...item}/>
                        ))
                        ) : (
                            <div className="empty-basket">
                            <img src={icon1} alt="" />
                            <span>محصولی در سبد نیست !</span>
                        </div>
                       )
                       ,[state])
                    }
                    

                    </ul>
                </div>
                <div className="all-price">
                    <p>مبلغ قابل پرداخت :</p>
                    <span className="num-all-price">{Number(totalPrice).toLocaleString()}<span> تومان</span></span>
                </div>
                <div className="mini-shopping-basket-btns">
                <Link href="React-Shopping-Project/shoppingbasket" className="seen-basket">مشاهده سبد خرید</Link>
                <Link href="React-Shopping-Project/checkout" className="checkout">تسویه حساب</Link>
                </div>
            </div>
        </div>
    )
}


