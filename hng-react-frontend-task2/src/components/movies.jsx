import React from "react"
import tv from '../images/tv.svg'
import moviePlayer from '../images/movieplayer.svg';
import '../styles/movieapp.css';


export default function Movie(){
    return(
        <div className="container movie-parent">
            
            <img src={moviePlayer} alt="" className="movie-img" />

            <div>
                <p>
                    <span>Top Gun: Maverick• 2022• PG-13• 2h 10m</span>
                    <span>Action</span>
                    <span>Drama</span>
                </p>
            
                <p>
                    After thirty years, Maverick is still pushing the envelope as a top naval aviator,
                    but must confront ghosts of his past when he leads TOP GUN's elite graduates
                    on a mission that demands the ultimate sacrifice from those chosen to fly it.
                </p>

                <div>
                    <p>Director : Joseph Kosinski</p>
                    <p>Writers :  Jim Cash, Jack Epps Jr,  Peter Craig</p>
                    <p>Stars: Tom Cruise, Jennifer Connelly, Miles Teller</p>
                </div>
            </div>
            
            <div>
                <button>See Showtimes</button>
                <button>More watch options</button>
                <img src="" alt="" />
            </div>
        </div>
    )
}




function SideBar(){
    return(
        <div>
            <div>
                <ul>
                    <li><span><img src={tv} alt="" /></span>Home</li>
                    <li><span><img src={tv} alt="" /></span>Movies</li>
                    <li><span><img src={tv} alt="" /></span>TV Series</li>
                    <li><span><img src={tv} alt="" /></span>Upcoming</li>
                </ul>
            </div>
        </div>
    )
}