import React from "react";
import './movieContent.css';
import titleImg from '../images/transformer-title.png';
import Button from "./Button";

function MovieContent() {
    return (
        <div className="content active">
            <img src={titleImg} alt="Movie Title" className="movie-title" />
            <h4><span>Year</span>
                <span><i>age</i></span>
                <span>length</span>
                <span>category</span>
            </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales libero sit amet volutpat tincidunt. Morbi cursus blandit turpis non aliquam. In vel erat sit amet velit pulvinar ullamcorper. Ut quis luctus nibh. Donec rhoncus enim id purus rhoncus condimentum eget vitae turpis. Praesent eu massa consectetur, malesuada est ac, porttitor neque. Donec lacinia orci quis risus tincidunt, ut dapibus sem tristique. Praesent lacinia vestibulum orci ut tempor. Mauris nec luctus lectus, non accumsan magna.</p>
            <div className="button">
                <Button 
                    icon={<ion-icon name="bookmark-outline"></ion-icon>} 
                    name='Book' 
                    color='#ff3700' 
                    bgColor='#ffffff' 
                />
                <Button 
                    icon={<ion-icon name="add-outline"></ion-icon>}
                    name='My list' />
            </div>
        </div>
    )
}

export default MovieContent;