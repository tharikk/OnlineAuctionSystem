import React from 'react';
import './index.css';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import image from './assets/BiddersBayLogo.png';
import dp from './assets/default.jpeg'

function Profile(){
    const navigate = useNavigate();

    const [user, setUser] = useState([]);
    useEffect(() => {
            fetch("http://localhost:8675/api/Users")
            .then((response) =>  response.json())
            .then((d) => {
                console.log(d[0])
                setUser(d[0])})
            .catch((error) => console.log(error))
        }, [])

    const BiddingPage = () => {
        navigate('/Bidding');
    }

    const HomePage = () => {
        navigate('/Home');
    }

    const ProfilePage = () => {
        navigate('/Profile');
    }

    const LogonPage = () => {
        navigate('/');
    }

    return(
        <div>
            <div className='homecontainer'>
                <header style={{width: "100%"}}>
                    <ul className='h-list'>
                        <li><img src={image} alt="BiddersBay.logo" id="navlogo"/></li>
                        <li><button id='home' className='navbuttons' onClick={HomePage}>Home</button></li>
                        <li><button id='profile' onClick={ProfilePage} className='navbuttons'>Profile</button></li>
                        <li><button id='auction' onClick={BiddingPage} className='navbuttons'>Auction House</button></li>
                        <li><button id='logout' onClick={LogonPage} className='navbuttons'>Log-Out</button></li>
                    </ul>
                </header>
            </div>
            <div className="profilecontent">
                <div className='profile-dp'>
                    <img src={dp} alt='DP' id='dp' />
                </div>
                <div className="details">
                    <h1>NAME: {user.userName}</h1>
                    <h1>Auction ID: {user.auctionId}</h1>
                    <h1>Phone Number: {user.phone}</h1>
                    <h1>Delivery Address: {user.address}</h1>
                    <h1>Permanent Address: {user.address}</h1>
                    <h1>Successful Bids: {user.bids}</h1>

                </div>
            </div>
        </div>
    )
}
export default Profile;