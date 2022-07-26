import { withRouter } from 'react-router-dom';

import React, { Component }  from 'react';
import {useEffect} from 'react';
import './css/main.css'
import './css/normalize.css'
import './css/style.css'
//import './css/main.js'
function SharedReccipe(props)
{
    useEffect(() => {
        // 👇️ call method in useEffect hook
        const facebookBtn = document.querySelector(".facebook-btn");
        const twitterBtn = document.querySelector(".twitter-btn");
        const pinterestBtn = document.querySelector(".pinterest-btn");
        const linkedinBtn = document.querySelector(".linkedin-btn");
        const whatsappBtn = document.querySelector(".whatsapp-btn");
        const pinterestImg = document.querySelector(".hero");
  
        let postUrl = encodeURI(document.location.href);
        let postTitle = encodeURI("Hi everyone, please check out my list of recipes: ");
        let postImg = encodeURI(pinterestImg.src);

        facebookBtn.setAttribute(
            "href",
            `https://www.facebook.com/sharer.php?u=${postUrl}`
          );

        twitterBtn.setAttribute(
            "href",
            `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
          );
        
          pinterestBtn.setAttribute(
            "href",
            `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}`
          );
         
          linkedinBtn.setAttribute(
            "href",
            `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
          );

          whatsappBtn.setAttribute(
            "href",
            `https://wa.me/?text=${postTitle} ${postUrl}`
          );
      }, []);
    
    return (
        <div className="App">
               <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
                />
            <main class="page">
                <header class="hero">
                <div class="hero-container">
                <div class="hero-text">
                <h1>simply recipes</h1>
                <h4>no fluff, just recipes</h4>
                </div>
                </div>
                </header>
                <section class="recipes-container">
                    <div class = "tags-container">
                        <h4>recipes</h4>
                        <div class ="tags-list">
                           <a href="#about">Beef (1)</a>
                           <a href="#about">Breakfast (2)</a>
                           <a href="#about">Carrots (3)</a>
                           <a href="#about">Food (4)</a>
                        </div>
                        <div class="share-btn-container">
                        <a href="#" class="facebook-btn" id='face'>
                        <i class="fab fa-facebook"></i>
                        </a>

                        <a href="#" class="twitter-btn">
                        <i class="fab fa-twitter"></i>
                        </a>

                        <a href="#" class="pinterest-btn">
                        <i class="fab fa-pinterest"></i>
                        </a>

                        <a href="#" class="linkedin-btn">
                        <i class="fab fa-linkedin"></i>
                        </a>

                        <a href="#" class="whatsapp-btn">
                        <i class="fab fa-whatsapp"></i>
                        </a>
    </div>
                    </div>
                    <div class="recipes-list">
                        <a href="#" class="recipe">
                        {/* Optional. Maybe add a link to the recipe details on click */}
                        <img
                        src='recipe-1.jpeg' 
                        class="img recipe-img"
                        alt=""
                        />
                        <h5>Carne Asada</h5>
                        <p>Prep : 15min | Cook : 5min</p>
                        
                        </a>

                        <a href="#" class="recipe">
                        {/* Optional. Maybe add a link to the recipe details on click */}
                        <img
                        src='recipe-2.jpeg' 
                        class="img recipe-img"
                        alt=""
                        />
                        <h5>Greek Ribs</h5>
                        <p>Prep : 15min | Cook : 5min</p>
                        </a>

                        <a href="#" class="recipe">
                        {/* Optional. Maybe add a link to the recipe details on click */}
                        <img
                        src='recipe-3.jpeg' 
                        class="img recipe-img"
                        alt=""
                        />
                        <h5>Vegetable Soup</h5>
                        <p>Prep : 15min | Cook : 5min</p>
                        </a>

                        <a href="#" class="recipe">
                        {/* Optional. Maybe add a link to the recipe details on click */}
                        <img
                        src='recipe-4.jpeg' 
                        class="img recipe-img"
                        alt=""
                        />
                        <h5>Banana Pancakes</h5>
                        <p>Prep : 15min | Cook : 5min</p>
                        </a>

                    </div>
                </section>
            </main>
            

        </div>
       
    );
}


export default withRouter(SharedReccipe);