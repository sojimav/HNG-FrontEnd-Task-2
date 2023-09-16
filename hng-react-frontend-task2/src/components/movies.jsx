import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import tv from '../images/tv.svg'
import moviePlayer from '../images/movieplayer.svg';
import Rectan from '../images/Rectan.svg';
import '../styles/movieapp.css';
import MovieLogo from '../images/MovieLogo.svg';
import Home from '../images/Home.svg';
import MovieProjector from  '../images/MovieProjector.svg';
import TVshow from '../images/TVshow.svg';
import Calendar from '../images/Calendar.svg';
import Logout from '../images/Logout.svg';
import TwoTickets from '../images/TwoTickets.svg';
import List from '../images/List.svg';



export default function Movie(){
    return(
        <div className="container movie-parent d-flex ">
            <SideBar/>
            <div className="container movie-details">
                <div className="container movie-con">
                <img src={moviePlayer} alt="" className="movie-img" />
                </div>
             
              <div className="container d-flex flex-row justify-content-between">
                    <div className="container about-movie">
                        <p className="mt-2">
                            <span className="fw-bold">Top Gun: Maverick• 2022• PG-13• 2h 10m</span>
                            <span className="action ps-5">Action</span>
                            <span className="drama ps-5">Drama</span>
                        </p>

                        <p>
                            After thirty years, Maverick is still pushing the envelope as a top naval aviator,
                            but must confront ghosts of his past when he leads TOP GUN's elite graduates
                            on a mission that demands the ultimate sacrifice from those chosen to fly it.
                        </p>  

                        <p>Director : <span className="movie-directors">Joseph Kosinski</span></p>
                        <p>Writers : <span className="movie-directors">Jim Cash, Jack Epps Jr,  Peter Craig</span></p>
                        <p>Stars: <span className="movie-directors">Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
                        <p><span className="movie-rate py-2 px-4 rounded text-light ">Top rated movie #65</span> Awards 9 nominations</p>
                    </div>

                    <div className="container other-options mt-4">
                        <button className="other-options-btn1 rounded  mb-3"><span className="pe-3"><img src={TwoTickets} alt="" /></span>See Showtimes</button><br/>
                        <button className="other-options-btn2 rounded mb-3 py-1"><span className="pe-3"><img src={List} alt="" /></span>More watch options</button>
                        
                            <img src={Rectan} alt="" className="rectan"/>
                        
                        <p className="best rounded"><span className="pe-2"><img src={List} alt="" /></span>The Best Movies and Shows in September</p>
                    </div>
              </div>

            </div>
            
        </div>
    )
}





function SideBar(){
    return(
        <div>
            <div className="sidebar shadow-lg mt-2">
                <img src={MovieLogo} alt="" className="movie-logo mt-3 ps-4" />
                <ul className="pt-5">
                   <a href="" ><li className="pb-5"><span className="pe-3"><img src={Home} alt="" /></span>Home</li></a> 
                    <a href=""><li className="pb-5"><span className="pe-3"><img src={MovieProjector} alt="" /></span>Movies</li></a>
                   <a href=""><li className="pb-5"><span className="pe-3"><img src={TVshow} alt="" /></span>TV Series</li></a> 
                   <a href=""><li className="pb-5"><span className="pe-3"><img src={Calendar} alt="" /></span>Upcoming</li></a> 
                </ul>

                <div className="container rounded sidebar-bottom lh-1-2 pt-4">
                    <p>Play movie quizes and earn free tickets</p>
                    <p >50k people are playing now</p>
                    <button className="sidebar-btn px-4 my-4">Start playing</button>
                    <span><img src={Logout} alt="" />Log out</span>
                </div>
            </div>
        </div>
    )
}