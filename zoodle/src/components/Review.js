import { useState } from "react";
import avatar from "../assets/images/avatar.png";

function Review(props) {

    return (
        <div className="review">
            <div className="user-info">
                <img src={avatar} alt="avatar"/>
            </div>

            <div className="user-review">
                <p className="user-name">{props.userName?props.userName:"Anonymous"}</p>
                {[...Array(props.rating)].map((num, index) => ( 
                    <i key={index} className="fa-solid fa-star"></i>
                ))}
                <p className="user-content">
                    {!props.review?<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga?</span>:props.review}
                </p>
            </div>
        </div>
    );
}

export default Review;