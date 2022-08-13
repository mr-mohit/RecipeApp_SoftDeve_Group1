import React, { useEffect, useState } from 'react';
import Review from '../components/Review';
import rdata from '../assets/data/recipies';
import rwdata from '../assets/data/reviews';
import reviewData from '../assets/data/reviews';

function RecepiesPage() {

    const [recipeData, setRecipeData] = useState([]);
    const [rewiewData, setReviewData] = useState([]);

    // Price filter
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();
    const [isFiltered, setIsFiltered] = useState(false);

    const filterRecipies = () => {
        if(!minPrice && !maxPrice) {
            setRecipeData(rdata);
            setIsFiltered(false);
            return;
        }

        if(!minPrice) {
            setRecipeData(rdata.filter((recipe)=>recipe.recipe_price <= maxPrice));
        } else if(!maxPrice) {
            setRecipeData(rdata.filter((recipe)=>recipe.recipe_price >= minPrice));
        } else {
            setRecipeData(rdata.filter((recipe)=>recipe.recipe_price >= minPrice && recipe.recipe_price <= maxPrice));
        }

        setIsFiltered(true);
    };

    useEffect(()=>{
        setRecipeData(rdata);
        // Highest star reviews at the top
        setReviewData(rwdata.sort((a,b)=>a.stars-b.stars));
    }, []);

    useEffect(()=>{
        filterRecipies();
    }, [minPrice,  maxPrice]);

    return (
        <div className="section-padding">
            <div className="container container-margin primary-on-white rounded">
                <h1>Recipies</h1>

                <span>Filter by price</span>
                <div className="price-filter">
                    From $ <input type="text" value={minPrice} onChange={(e)=>{setMinPrice(e.target.value)}}/>
                    <span> - </span>
                    To $ <input type="text" value={maxPrice} onChange={(e)=>{setMaxPrice(e.target.value)}}/>
                </div>
                
                <h3 style={{marginBottom: "10px"}}>{isFiltered?"Filtered Results":"All Recipies"}</h3>
                <div className="recipe-list">
                {recipeData.map((recipe, idx)=>
                    <div key={"recipe_" + idx} className="recipe">
                        <p className="recipe-name">{recipe.recipe_name}</p>
                        <p className="recipe-price">${recipe.recipe_price}</p>
                    </div>
                )}
                </div>
                <br/>
                <h3>Reviews</h3>
                {rewiewData.map((review, idx)=>
                    <Review rating={review.stars} review={review.content} userName={review.author}/>
                )}
            </div>
        </div>
    )
}

export default RecepiesPage;