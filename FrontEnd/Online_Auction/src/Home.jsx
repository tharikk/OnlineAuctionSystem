import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import image from './assets/BiddersBayLogo.png';

function Home({ products }) {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div>
            <div className='homecontainer'>
                <header style={{ width: "100%" }}>
                    <ul className='h-list'>
                        <li><img src={image} alt="BiddersBay.logo" id="navlogo" /></li>
                        <li><button className='navbuttons' onClick={() => navigateTo('/Home')}>Home</button></li>
                        <li><button className='navbuttons' onClick={() => navigateTo('/Profile')}>Profile</button></li>
                        <li><button className='navbuttons' onClick={() => navigateTo('/Bidding')}>Auction House</button></li>
                        <li>
                            <button className='navbuttons' onClick={() => {
                                navigateTo('/');
                                alert("Logout Successful");
                            }}>
                                Log-Out
                            </button>
                        </li>
                    </ul>
                </header>
            </div>

            <div className='HomeContent'>
                <div className='logo-sub'>
                    <img src={image} alt="BiddersBay.logo" id="Banner" />
                </div>
                <br />
                <div className='auction-sub'>
                    <div className="h-left">
                    <h1>Upcoming Auctions</h1>
                        {Array.isArray(products) && products.length > 0 ? (
                            products.map((product) => (
                                <div key={product.productId} className="t-auction">
                                    {product.productName}
                                </div>
                            ))
                        ) : (
                            <p>No upcoming auctions</p>
                        )}
                    </div>
                    <div className="h-right">
                        <h1 style={{ marginBottom: '10px' }}>Ongoing Auction</h1>
                        <div className="o-auction">
                            <h3>Ends in: 00:00:00</h3>
                            <h1>{products[0].productName}</h1>
                        </div>
                        <button id='auc-btn' onClick={() => navigateTo('/Bidding')}>JOIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
