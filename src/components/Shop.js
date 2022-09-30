import React from 'react'
import BoB from '../components/bank1.webp'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreaters } from '../state/index'
import './shop.css';




const Shop = () => {

    const dispatch = useDispatch()
    const balance = useSelector(state => state.amount)
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreaters, dispatch)

    return (
        <>
            <div className='conatiner'>
                <h1 className='bank-m text-center'>Your Bank Balance - Money</h1>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active mt-3">
                            <img src={BoB} className="bank-img " alt="bank of baroda" />
                        </div>
                    </div>
                </div>

                {/* <div className='container d-flex justify-content-center align-items-center mt-5'>
                    <button type="button" className="btn btn-dark btn-lg mx-4" onClick={() => { dispatch(actionCreaters.withdrawMoney(100)) }}>-</button>
                    Update Balance
                    <button type="button" className="btn btn-dark  btn-lg mx-4" onClick={() => { dispatch(actionCreaters.depositMoney(100)) }}>+</button>
                </div> */}

                <h2 className='wd-m text-center mt-4'>Withdraw & Deposite Money</h2>
                <div className='u-btn container d-flex justify-content-center align-items-center '>
                    <button type="button" className="btn btn-m " onClick={() => { (withdrawMoney(100)) }}>-</button>
                    Update Balance- ₹{balance}
                    <button type="button" className="btn btn-m  " onClick={() => { (depositMoney(100)) }}>+</button>
                </div>


            </div>
        </>
    )
}

export default Shop