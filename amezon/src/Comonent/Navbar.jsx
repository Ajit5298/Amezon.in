import React from 'react';
import "./Style.css";


const Navbar = () => {
    return (
        <div>
        <div id="Nav">
            <div id="logo">
                <img src="data:image/jpeg;base64,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"></img>
            </div>
            <div id="location">
                <div id="locationlogo"></div>
                <div id="locationpart">
                    <div id="locationpartas">
                        <span>Delivering to Pune 411033</span>
                    </div>
                    <div id="locationparta">Sign in to update your location</div>
                </div>
            </div>
            <div id="search">
                <div id="all"><span>All</span></div>
                <div id="input">
                    <input id="input" type='serch' placeholder='Search Amezon.in'></input>
                </div>
                <div id="sicon"></div>
            </div>
            <div id="lang">
                <span>EN</span>
            </div>
            <div id="account">

                <div>Account</div>
                <span>Sign up & sign in</span>
            </div>
            <div id="order">
                <div>Returns</div>
                <span>& Order</span>
            </div>
            <div id="cart">Cart</div>
        </div>
        <div id="navtwo">
            <ol>
                <li>All</li>
                <li>Amezon miniTv</li>
                <li>Sell</li>
                <li>Best Sellers</li>
                <li>Mobiles</li>
                <li>Today's Deals</li>
                <li>New Releases</li>
                <li>Customer Service</li>
                <li>Prime</li>
                <li>Electronics</li>
                <li>Gift Ideas</li>
            </ol>
            <div id="shoppingmode">
                <img src="https://m.media-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg"></img>
            </div>

        </div>
        </div>
    )
}

export default Navbar