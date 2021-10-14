import React from 'react';
import { useHistory } from 'react-router';

const Home = () => {
   const history = useHistory()
    const clickhandler = (e) =>{
            const token = localStorage.getItem('auth-token')
            if(token){
                localStorage.clear()
            }
            window.location.href = '/';
                          

    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/6041b930385de407571cbc7e/1f00bmqbf';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();


          
    }
    return (
        <React.Fragment>
        <button onClick={clickhandler}>Logout</button>
        <h1>Wellcome to Home Page</h1>
        <div className="para">
        <p>token Successfully Stored in localStorage</p>
        </div>
        </React.Fragment>
    );
};

export default Home;