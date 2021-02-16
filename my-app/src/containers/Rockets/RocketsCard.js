import React from 'react'
import classes from './RocketsCard.css' 

const RocketsCard = (props) => {
    return(
        <div className={classes.Card}>
            <div className={classes.Title}>
                <h4>Card ID: {props.id}</h4>
            </div>
            <div className={classes.Container}>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default RocketsCard