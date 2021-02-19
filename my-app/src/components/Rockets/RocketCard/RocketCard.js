import React from 'react'
import classes from './RocketCard.css' 

const RocketCard = (props) => {
    return(
        <div className={classes.Card}>
            <div className={classes.Name}>
                <h4>{props.rocket.rocket_name}</h4>
            </div>
            <div className={classes.Container}>
                <p>
                    Type: {props.rocket.rocket_type}<br />
                    Status: {props.rocket.active?"ACTIVE": "INACTIVE"}<br />
                    ID: {props.rocket.id}<br />
                </p>
            </div>
            <img src={props.rocket.flickr_images} className={classes.CardImg}/>
        </div>
    )
}

export default RocketCard