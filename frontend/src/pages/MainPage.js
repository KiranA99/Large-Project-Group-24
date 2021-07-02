import React from 'react'; 
import PageTitle from '../components/PageTitle'; 
import Main from '../components/Main'; 
import heart from '../components/img/heart.png';
import Account from '../components/Account';
import Alarms from '../components/Alarms';
import './css/MainPage.css';

const MainPage = () => {
    return (
        <div>
            <div class="lower">
            <div class="upper"> <PageTitle /> </div>
                <div class="row">
                    <div class="column left">
                        <div> <img src={heart} class="heart" alt="Heart"  />
                         </div>
                        <Account />
                    </div>
                    <div class="column middle"> 
                        <p>middle part</p> 
                    </div>
                    <div class="column right">
                        <Alarms />
                    </div>
                </div>
            </div>
        </div>
        
    );
}; 
export default MainPage;