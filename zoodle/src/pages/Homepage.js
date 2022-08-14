import React,{useState} from 'react';
import IngredientList from '../components/IngredientList';
import NewIngredient from '../components/NewIngredient';


function HomePage() {
    
    const [ingredientArray, setNewIngredients] = useState([
      ]);
    
    const addNewIngredientHandler = (newIngredient) => {
        //setNewIngredients(ingredientArray.concat(newIngredient));
        setNewIngredients(prevIngredientArray =>prevIngredientArray.concat(newIngredient));
      };
    
    return (
        <div className="section-padding">
            <div className="container rounded primary-on-white container-margin">
                <div className='title'>
                    Zoodle
                </div>
                <br/>
                <div className='quote'>
                    "Cutting food wate is a delicious way of saving money, helping to feed the world and protect the planet." <br/><br/>-Tristram Stuart-
                </div>
                <div>
                    <NewIngredient onAddIngredient={addNewIngredientHandler} />
                    <IngredientList ingredients={ingredientArray}/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;