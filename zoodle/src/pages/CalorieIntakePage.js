import React, { useEffect, useState } from 'react';

function CalorieIntakePage() {

    const [result, setResult] = useState();
    const [gender, setGender] = useState();
    const [age, setAge] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();

    const formSubmit = (e) => {
        e.preventDefault();

        if(gender=="Male") {
            setResult(13.397 * weight + 4.799 * height - 5.677 * age + 88.362);
        } else if(gender=="Female") {
            setResult(9.247 * weight + 3.098 * height - 4.330 * age + 447.593);
        }
    };

    return (
        <div className="section-padding">
            <div className="container container-margin primary-on-white rounded">
                <h1>Calorie Intake</h1>
                <p>Find out how many calories do you need to maintain your weight!</p>
            
                <form className="intake-form" onSubmit={formSubmit}>
                    <p>Age</p>
                    <input type="text" onChange={(e)=>{setAge(parseInt(e.target.value))}} value={age}/>

                    <p>Gender</p>
                    <label>Male <input type="radio" checked={gender=="Male"} value="Male" onChange={(e)=>{setGender(e.target.value)}}/></label>
                    <label>Female <input type="radio" checked={gender=="Female"} value="Female" onChange={(e)=>{setGender(e.target.value)}}/></label>

                    <p>Height (cm)</p>
                    <input type="text" onChange={(e)=>{setHeight(parseInt(e.target.value))}} value={height}/>

                    <p>Weight (kg)</p>
                    <input type="text" onChange={(e)=>{setWeight(parseInt(e.target.value))}} value={weight}/>

                    <button type="submit">Calculate</button>

                    <p>{result?`You need to take ${result.toFixed(2)} calories to maintain your current weight`:""}</p>
                </form>
            </div>
        </div>
    )
}

export default CalorieIntakePage;