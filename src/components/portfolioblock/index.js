import React from "react";
import Ecsample from "../images/educationconnectionsample.PNG";
import Cybersample from "../images/cyber-security-degree-sample.PNG";
import Collegevis from "../images/college-score-card-vis.png";
import Pokedex from "../images/PokeDex.jpg";
import Weatherdash from "../images/weather-dashboard.PNG"
import Workplanner from "../images/workdayplanner.PNG"

function Portfolioblock() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='content-box'> 
                    <div className='portfolio-table'>
                        <h1>Website and Project Portfolio</h1>
                        <div className='row'>
                            <div className='col-md-6'>
                                <a href={'https://www.educationconnection.com/online-degrees'} target='_blank' rel="noreferrer"><img src={Ecsample} className="img-fluid" alt='educationconnection.com sample image'/></a>
                                <div className = "container">
                                    <p>From content development, on/off page optimizations to wordpress troubleshooting, my finger prints are all over the online degree section. Check it out!</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <a href="https://cyber-security.degree/" target='_blank'rel="noreferrer"><img src={Cybersample}  className="img-fluid" alt='cyber-security.degree sample image'/></a>
                                <div className = "container">
                                    <p>Worked with writers and developers to bring this site to live from scratch in under 4 months. Since then, we have continued development and gain ground in rankings with offpage optimization and content development.</p>
                                </div>
                            </div>
                        </div><div className='row'>
                            <div className='col-md-6'>
                            <a href= {"https://scorecard-visualizer.herokuapp.com/"} target = "_blank"rel="noreferrer"><img src={Collegevis} className="img-fluid" alt='sample image'/></a>
                            <div className = "container">
                                <p>The College Scorecard Visualizer is an application allowing users to search for colleges and review a variety of returned statistics in a visually appealing dashboard graphical interface.</p>
                                <p>Check out the repo  <a href={"https://github.com/J35RL4R/college-score-card-visualizer"} target="_blank"rel="noreferrer" >here</a></p>
                            </div>
                            </div>
                            <div className='col-md-6'>
                                <a href = {"https://j35rl4r.github.io/Weather-Dashboard-/"} target= "_blank"rel="noreferrer"><img src={Weatherdash}  className="img-fluid" alt='sample image'/></a>
                                <div className = "container">
                                    <p>A weather dashboard that tells you the forecast, saves searchs and renders previously searched cities. Uses open weather maps api.</p>
                                    <p>Check out the repo  <a href={"https://github.com/J35RL4R/Weather-Dashboard-"} target="_blank"rel="noreferrer" >here</a></p>
                                </div>
                                </div>
                        </div><div className='row'>
                            <div className='col-md-6'>
                                <a href= {"https://j35rl4r.github.io/Workday-Planner/"} target= "_blank"rel="noreferrer"><img src={Workplanner} className="img-fluid" alt='sample image'/></a>
                                <div className = "container">
                                    <p>An application that helps you stay organized with moment.js and local storage.</p>
                                    <p>Check out the repo  <a href={"https://github.com/J35RL4R/Workday-Planner"} target="_blank"rel="noreferrer" >here</a></p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                             <a href= {"https://j35rl4r.github.io/PokeDex-V1/"} target= "_blank"rel="noreferrer"><img src={Pokedex} className="img-fluid" alt='sample image'/></a>
                                <div className = "container">
                                    <p>This application combines information from the Pokemon API and PokemonGo API for users can find all information about a pokemon in one easy to use online Pokedex.</p>
                                    <p>Check out the repo  <a href={"https://github.com/J35RL4R/PokeDex-V1"} target="_blank"rel="noreferrer" >here</a> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
           
        </div>
    </div>
  );
}

export default Portfolioblock;