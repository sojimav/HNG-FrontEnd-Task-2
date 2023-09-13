import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/movieapp.css';
import tv from '../images/Logo.svg';
import Menu from '../images/Menu.svg';
import imbd from '../images/imbd.png'
import tomato from '../images/tomato.svg';
import Play from '../images/Play.svg';
import Search from '../images/Search.svg';
import Seemore from '../images/Seemore.svg';
import movieCard from '../images/movieCard.svg';


function Header() {
    return (
        <div>
             <div className='container-fluid parent-container px-0'>
            <header>
            <nav className="navbar navbar-expand-lg d-flex flex-row justify-content-evenly">
                <img src={tv} alt="" />
            
                <input className="transparent-input mr-sm-2 w-50 border" type="search" placeholder="What do you want to watch?"/>
                <span className='search-icon'><img src={Search} alt="" /></span>

                <span>
                        <a href="" className='pe-5 sign-in'>Sign in</a>
                        <img src={Menu} alt="" />
                </span>      
            </nav>
            </header>
       
        <div className='header-img img'></div>

        <div className='John-Wick'>
            <h2 className='fs-3 pb-3'>John Wick 3 : Parabellum</h2>
            <span>
                <img src={imbd} alt="" />
                <span className='ps-3 pe-3'>860/100</span>
                <img src= {tomato} alt="" className='ps-3' />
                <span className='ps-2'>97%</span>
            </span>
            <p className='pt-3'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>   
            <button className='header-btn py-2 px-5'><span className='pe-2'><img src= {Play} alt="" /></span>Watch trailer</button>
        </div>

        </div>    
       <FeaturedMovie/>
        </div>
     
       
    )
  }
  


  function FeaturedMovie(){
    return(
        <div className='container pt-5 movie-container mt-5'>
             <div className='d-flex flex-row justify-content-between pb-3'>
                <h3>Featured Movie</h3>
                <img src= {Seemore} alt="" />
            </div>

            <div className='row'>
              <div className='col-3'>
                <img src={movieCard} alt="" />
              </div>
            </div>
        </div>
       
    )
   
  }

export default Header;