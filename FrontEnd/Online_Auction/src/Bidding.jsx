import './index.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image from './assets/BiddersBayLogo.png';

function Bidding({ products }) {
    const [bidderName, setBidderName] = useState("NIL");
    const [bid, setBid] = useState(50);
    const [user, setUser] = useState([]);
        useEffect(() => {
                fetch("http://localhost:8675/api/Users")
                .then((response) =>  response.json())
                .then((d) => {
                    console.log(d[0])
                    setUser(d[0])})
                .catch((error) => console.log(error))
            }, [])
    // Get the first product from props
    const auctionProduct = products.length > 0 ? products[0] : null;
    const [currentBid, setCurrentBid] = useState(auctionProduct ? auctionProduct.price : 1000);

    const navigate = useNavigate();

    const bidHandler = (e) => {
        const value = Number(e.target.value);
        setBid(value >= 0 ? value : 0);
    };

    const raiseBid = () => {
        setCurrentBid(prevBid => prevBid + bid);
        setBidderName(user.auctionId);
    };

    return (
        <>
            <div className='homecontainer'>
                <header>
                    <ul className='h-list'>
                        <li><img src={image} alt="BiddersBay.logo" id="navlogo" /></li>
                        <li><button className='navbuttons' onClick={() => navigate('/Home')}>Home</button></li>
                        <li><button className='navbuttons' onClick={() => navigate('/Profile')}>Profile</button></li>
                        <li><button className='navbuttons' onClick={() => navigate('/Bidding')}>Auction House</button></li>
                        <li><button className='navbuttons' onClick={() => { navigate('/'); alert("Logout Successful"); }}>Log-Out</button></li>
                    </ul>
                </header>
            </div>

            <div className='current-item'>
                <h1>C U R R E N T - I T E M</h1>
                <h2>00:00:00</h2>
                <div className='items' id='item-container'>
                    {auctionProduct ? (
                        <div className="ongoing-auction">
                            <h2 className='auction-texts'>{auctionProduct.productName}</h2>
                            <h3 className='auction-texts'>Starting Bid: ₹{new Intl.NumberFormat('en-IN').format(auctionProduct.price)}</h3>
                        </div>
                    ) : (
                        <h3>No products available</h3>
                    )}
                </div>

                <div className='subs' id='description'>
                    <h1 style={{ color: "rgba(128, 128, 128, 70%)", marginTop: "30px", marginBottom: "10px" }}>C U R R E N T - B I D</h1>
                    <h1 id='bidder'>{bidderName}</h1>
                    <h1 id='current-bid'>₹{new Intl.NumberFormat('en-IN').format(currentBid)}</h1>
                </div>

                <div className='subs' id='stakes'>
                    <input 
                        type='number' 
                        id='stake-price' 
                        value={bid} 
                        onChange={bidHandler} 
                        min="0"
                    />
                    <br />
                    <button id='stake-high' onClick={raiseBid}>R a i s e - B i d</button>
                    <button id='dropout' onClick={() => navigate('/Home')}>Drop-Out</button>
                </div>
            </div>
        </>
    );
}

export default Bidding;
