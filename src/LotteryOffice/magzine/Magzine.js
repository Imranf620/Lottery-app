import React, { useState } from 'react';
import Header from '../Header';
import countryTickets from '../CountryTickets';
import './Magzine.css';
import MagazineData from './MagzineData.js';
import { Link } from 'react-router-dom';
import Footerr from '../Footerr.js';

const Magzine = () => {
    const [categoryDropdown, setDropDown] = useState(false);
    const [categoryType, setCategoryType] = useState('All');

    const handleCategoryType = (value) => {
        setCategoryType(value);
        setDropDown(false);
    }

    const handleCategoryDropDown = () => {
        setDropDown(!categoryDropdown);
    }

    return (
        <div className='container-fluid'>
            <Header />
            <div className='row bg6'>
                <div className='col-12 col-md-10 mx-auto'>
                    <div className='d-flex flex-column flex-md-row align-items-center justify-content-between p-3 mt-2 '>
                        <h2 className='text-light'>The Lottery Office Magazine</h2>
                        <div className='d-flex align-items-center cursor-pointer justify-content-between p-2 text-center all' onClick={handleCategoryDropDown}>
                            <p className='fs-6 mb-0 text-light'>{categoryType}</p>
                            <i className='bi bi-caret-down-fill text-light' />
                        </div>
                    </div>
                    {categoryDropdown && (
                        <div className='category-dropDown'>
                            <p className={categoryType === 'All' ? 'active' : ''} onClick={() => handleCategoryType('All')}>All</p>
                            <p className={categoryType === 'All Lotteries' ? 'active' : ''} onClick={() => handleCategoryType('All Lotteries')}>All Lotteries</p>
                            <p className={categoryType === 'Charity' ? 'active' : ''} onClick={() => handleCategoryType('Charity')}>Charity</p>
                            <p className={categoryType === 'How to Play' ? 'active' : ''} onClick={() => handleCategoryType('How to Play')}>How to Play</p>
                            <p className={categoryType === 'Lifestyle' ? 'active' : ''} onClick={() => handleCategoryType('Lifestyle')}>Lifestyle</p>
                            <p className={categoryType === "Winners' Tips" ? 'active' : ''} onClick={() => handleCategoryType("Winners' Tips")}>Winners' Tips</p>
                        </div>
                    )}
                    <hr />
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-8 mx-auto'>
                            <div className='row '>
                                {MagazineData.map((value, index) => (
                                    <div className='col-12 col-md-4 mb-3' key={index}>
                                        <div className='d-flex flex-column h-100 p-2 mt-3 cursor-pointer rounded bg-dark instant1'>
                                            <img src={value.image} className='rounded' alt='Magazine' />
                                            <div className='p-2 flex-grow-1'>
                                                <p className='linked'>{value.date}</p>
                                                <h4 className='fs-5 text-light'>{value.name}</h4>
                                                <p className='linked'>{value.readTime}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='col-12 col-md-4 '>
                            <div className='col-12 mx-auto'>
                                {countryTickets.map((value, index) => (
                                    <div key={index} className='align-items-center rounded bg-dark instant1 winner-card cursor-pointer p-2 mt-3 d-flex' onClick={() => document.location.href = '/play'}>
                                        <img src={value.image} className='w-25' alt='Logo' />
                                        <div className='ms-3'>
                                            <h5 className='text-light'>Play {value.countryName}</h5>
                                            <p className='linked'>${value.pirce}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <h4 className='mt-4 text-light'>Featured Stories</h4>
                                <p className='mb-0 mt-4 linked'>April 17, 2023</p>
                                <Link to='/play' className='linked fs-6'>Can You Play International lotteries From Australia?</Link>
                                <p className='mb-0 mt-4 linked'>Apr 10, 2023</p>
                                <Link to='/play' className='linked fs-6'>USA Power Lotto Online in Australia, Matched To Play U.S. Powerball Lottery!</Link>
                                <p className='mb-0 mt-4 linked'>Jan 3, 2023</p>
                                <Link to='/play' className='linked fs-6'>USA Mega Lotto Online From Australia, Your Way To Play U.S. Mega Millions Lottery!</Link>
                            </div>
                        </div>
                        <div className='d-flex gap-3 my-3'>
                            <Link to='/' className='fs-5 linked'>Home</Link>
                            <Link to='/magzine' className='linked fs-5'>Magazine</Link>
                        </div>
                    </div>
                </div>
                <Footerr />
            </div>
        </div>
    )
}
export default Magzine;
