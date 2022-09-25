import {React}  from 'react';


import './Footer.css';


const Footer=()=>{


    return(

        <div>
            
            <div class="footer">
        <div class="footer-grid">
            <div class="footer-content">
                <h3 class="fc-h">A WORLD OF STAINLESS STEEL</h3>
                <h5 class="fc-b">Making of Stainless Steel</h5>
                <h5 class="fc-b">Magic of Stainless Steel</h5>
                <h5 class="fc-b">Applications of Stainless Steel</h5>
                <h5 class="fc-b">Stainless Academy</h5>
            </div>
            <div class="footer-content">
                <h3 class="fc-h">MEDIA</h3>
                <h5 class="fc-b">Press Releases</h5>
                <h5 class="fc-b">In the News</h5>
                <h5 class="fc-b">Media contact</h5>
                <h5 class="fc-b">Blog</h5>
            </div>
            <div class="footer-content">
                <h3 class="fc-h">CONTACT</h3>
                <h5 class="fc-b">Office</h5>
                <h5 class="fc-b">Buissiness Query</h5>
                <h5 class="fc-b">Login</h5>
            </div>
            <div class="footer-content">
                <h3 class="fc-h">NEWSLETTER</h3>
                <h5 class="fc-b1">Sign Up to recieve our newsletters and latest updates.</h5>
                <input type="email" class="newsletter" placeholder="Enter Your Email ID"></input>
                <button class="newsletter-button">SUBSCRIBE</button>
            </div>
        </div>
        <div class="footer-end">
            <p class="fe-txt">Thank you. We hope your experience was excellent and we can’t wait to see you again soon.</p>
        </div>

        </div>

        </div>
    );
}



export default Footer;