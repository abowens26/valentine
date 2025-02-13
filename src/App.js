import React, {useState} from 'react';
import './App.css';
import video from './Components/Assests/valentinet.MP4'
import image from './Components/Assests/Tezza-2917.jpeg'
import image2 from './Components/Assests/IMG_9892.JPG'
import Flowerview from './Components/Assests/Flowerview';


function App() {
   const [flowerScore,setflowerScore] = useState(0);
   
   function dropdown(){
    document.getElementById("note-t").classList.toggle("show");
   }


  return (

    <div class='body'>
            <header class="header">
        <h1>Happy Valentines Day Tobechi!</h1>
        <h2>Click links to see what we are doing this weekend! &#128513;</h2>
      </header>

      <div class="nav-container">
        <nav> <a href='https://www.urbanroastdc.com/'>Urban Roast </a>&#129385; </nav>
        <nav> <a href='https://www.fandango.com/captain-america-brave-new-world-3d-2025-239141/movie-overview?cmp=PDT_Copy_iPhone'>Movies </a> &#127871;</nav>
        <nav> <a href='https://www.eventbrite.com/e/dc-friday-night-lights-dc-saturday-night-fever-comedy-showcase-tickets-1107279445629?msockid=3f99526e73976e34391a467072906f3c'>Comedy</a> &#128514; </nav>
      </div>

      
      <div class="video-container"> 
      <img alt="" class="heart" src="https://webstockreview.net/images/heart-clipart-red-2.png"></img>
        <div class="image-container">
           <img alt="" class="pic" src={image}></img>
        </div>
        <iframe title="tiktok" width="500px" height={"500px"} allowFullScreen="true" src={video}></iframe>
           <img alt="" class="img2" src={image2}></img>
           <img alt="" class="heart" src="https://webstockreview.net/images/heart-clipart-red-2.png"></img>
      </div>
       
       <div class='flower'>
        <Flowerview score={flowerScore}/> 
        </div>
      <div className='flowerscore'>
      <button onClick={() => setflowerScore(flowerScore+ 1)}>Click me for flowers!</button>
      </div>
      <div class="mylove">
        <h3 class="sparkle" onClick={() => dropdown()}>&#128150;</h3>
        <p id="note-t" class="note">
          Dear Tobechi, 
          Happy Valentine's Day! I love you very much and we grown ALOT through this past year. <br></br>
          I really hope that we continue to love each other each and every day! From the first day I met you, you have motivated me be become the best version of myself!<br></br>
          Throughout these 4 (or 5) years I have learned to GROW and LOVE with you! I am really looking foward to loving you for years to come! You are a kind, loving, warm, and fun sprit. I am thankful to have found a person who understands me as much as YOU do! I am VERY proud of you and happy valentines day!<br></br>
       
        </p>
      </div>


     <div class="footer">
      <footer>
         <h3>Ali and Tobechi's Valentine's Weekend! &#10084;</h3>
      </footer>
     </div>
    </div>
  );
}

export default App;
