import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
import Poster1 from '../images/Poster1.svg';
import Poster2 from '../images/Poster2.svg';
import Poster3 from '../images/Poster3.svg';
import Poster4 from '../images/Poster4.svg';
import Poster5 from '../images/Poster5.svg';
import Poster6 from '../images/Poster6.svg';
import Poster7 from '../images/Poster7.svg';
import Vector from "../images/Vector.svg";
import Vector1 from "../images/Vector1.svg";
import Vector2 from "../images/Vector2.svg";


let movieLists = [
  {
    "image": movieCard,
    "p1": "USA, 2016 - Current",
    "p2": "Stranger Things",
    "ratings": "86.0 / 100",
    "percent": "97%",
    "p3": "Action, Adventure, Horror"
  },

  {
    "image": Poster1,
    "p1": "USA, 2005",
    "p2": "Batman Begins",
    "ratings": "86.0 / 100",
    "percent": "70%",
    "p3": "Action, Adventure"
  },

  {
    "image": Poster2,
    "p1": "USA, 2018",
    "p2": "Spider-Man : Into The Spider Verse",
    "ratings": "86.0 / 100",
    "percent": "87%",
    "p3": "Animation, Action, Adventure"
  },

  {
    "image": Poster3,
    "p1": "USA, 2017",
    "p2": "Dunkirk",
    "ratings": "78.0 / 100",
    "percent": "94%",
    "p3": "Action, Drama, History"
  },

  {
    "image": Poster4,
    "p1": "USA, 2021",
    "p2": "Dune",
    "ratings": "84.0 / 100",
    "percent": "75%",
    "p3": "Action, Adventure, Drama"
  },

  {
    "image": Poster5,
    "p1": "USA, 2021",
    "p2": "No Time To Die",
    "ratings": "76.0 / 100",
    "percent": "68%",
    "p3": "Action, Adventure, Thriller"
  },

  {
    "image": Poster6,
    "p1": "USA, 2021",
    "p2": "Shang-Chi and the Legend of the Ten Rings",
    "ratings": "79.0 / 100",
    "percent": "71%",
    "p3": "Action, Adventure, Fantasy"
  },

  {
    "image": Poster7,
    "p1": "USA, 2021",
    "p2": "Don't Breathe 2",
    "ratings": "61.0 / 100",
    "percent": "46%",
    "p3": "Action, Drama, Horror"
  } 
  
]






function Header() {

const [movieData, setMovieData] = useState(null);

useEffect(() => {
  // Make the API request when the component mounts
  axios
    .get('https://api.themoviedb.org/3/movie/550?api_key=c263a467eb5445ded96c8027def713c1')
    .then((response) => {
      // Update the state with the API data
      setMovieData(response.data);
      
    })
    .catch((error) => {
      console.error('Error fetching data from the API:', error);
    });
}, []);

    console.log(movieData);
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

        <div className='container John-Wick homepage'>
            <h2 className='fs-3 pb-3 original_title'>John Wick 3 : Parabellum</h2>
            <span>
                <img src={imbd} alt=""  className='poster_path'/>
                <span className='ps-3 pe-3 popularity'>860/100</span>
                <img src= {tomato} alt="" className='ps-3' />
                <span className='ps-2 percent'>97%</span>
            </span>
            <p className='pt-3 overview'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>   
            <button className='header-btn py-2 px-5'><span className='pe-2'><img src= {Play} alt="" /></span>Watch trailer</button>
        </div>

        </div>    
       <FeaturedMovie movieList={movieLists}/>

         <Footer/>
        </div>
     
      
    )
  }
  



  function FeaturedMovie({movieList}) {
    return (
      <div className='container pt-5 movie-container mt-5'>
        <div className='container d-flex flex-row justify-content-between pb-3'>
          <h3>Featured Movie</h3>
          <img src={Seemore} alt='' className='pe-1' />
        </div>
  
        <div className='row'>
          {movieList.map((movie, index) => (
            <div className='col-md-3 g-5' key={index}>
              <Link to= '/movies'>
              <img src={movie.image} alt='' className='container border shadow-lg logo_path'/>
              </Link>
             
              <span className='lh-sm'>
                <p className='pt-4 origin_country'>{movie.p1}</p>
                <p className='fw-bold name'>{movie.p2}</p>
                <span>
                  <img src={imbd} alt='' className='img-log' />
                  <span className='ps-3 pe-3 ratings'>{movie.ratings}</span>
                  <img src={tomato} alt='' className='ps-3' />
                  <span className='ps-2'>{movie.percent}</span>
                </span>
                <p className='pt-3'>{movie.p3}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  



  function Footer(){
      return (
        <div className='container footer'>
          <span className='d-flex flex-row justify-content-evenly w-50 mx-auto mt-4'>
            <img src={Vector} alt="" />
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
          </span>
           
          <span className='d-flex flex-row  justify-content-evenly fw-bold w-75 mx-auto mt-4'>
            <p>Conditions of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
          </span>

          <p className='text-center'>© 2021 MovieBox by Adriana Eka Prayudha  </p>
        </div>
      )
  }


export default Header;