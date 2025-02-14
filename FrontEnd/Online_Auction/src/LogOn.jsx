import {BrowserRouter as Link,   useNavigate} from "react-router-dom";
import './index.css'
import { useState, useEffect } from "react";
import image from './assets/BiddersBayLogo.png'
function LoginPage(){
    const navigate = useNavigate();
    const [isuservisible, setIsuservisible] = useState(true);
    const [data, setData] = useState(
        {
        username: "",
        password: ""
        }
    );

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8675/api/Users")
        .then((response) =>  response.json())
        .then((d) => {
            console.log(d[0])
            setUser(d[0])})
        .catch((error) => console.log(error))
    }, [])


    const usertoggle = () => {
        setIsuservisible(true)
    }

    const admintoggle = () => {
        setIsuservisible(false)
    }


    const handleusername = (e) => {

        setData(data => ({...data, username : e.target.value}));

    }

    const handlepassword = (e) => {
        setData(data => ({...data, password: e.target.value}));
    }


    const validate = () => {
        if(data.username == user.userName && data.password == user.userAccess){
            navigate("/Home");
            
        }
        else{
            console.log(user.userName + +user.userAccess + + data.username + + data.password)
            console.log("failed");
            alert("Invalid username or password");
        }
    }


    return(  
        <>
            <div className="logo-container">
                <img src={image} alt="BiddersBay.logo" id="logo"/>
            </div>
            <div className="formFrame">

                <div className="toggles">
                    <button id="admin" onClick={admintoggle}>ADMIN</button>
                    <button id="user" onClick={usertoggle}>USER</button>
                </div>
                {isuservisible ? (
                <form id="User_form" onSubmit={validate}>
                    <h2 style={{margin: "30px 0px", color: "black"}}>
                        U S E R - L O G I N
                    </h2>
                    <input type="text" className="input" id="uninput" onChange={handleusername} placeholder="USER-ID"/><br />
                    <input type="password" className="input" id="upinput" onChange={handlepassword} placeholder="Password" /><br/>
                    <input type="submit" value="GO!" id="ubtn"/><br/>
                    <a href="#"> Sign up</a>
                    <p>Note: Verify your Address and communication information while signing up and Administration will not be responsible for any Refunds.</p>
                </form>
                ) : (
                <form id="Admin_form">
                    <h2 style={{margin: "30px 0px", color: "black"}}>
                        A D M I N - L O G I N
                    </h2>
                    <input type="text" className="input" id="aninput" placeholder="ID"/><br />
                    <input type="password" className="input" id="apinput" placeholder="Password" /><br/>
                    <input type="submit" value="GO!" id="abtn"/><br/>
                </form>
                )}
            </div>
        </>
    )
}
export default LoginPage;