import {React, useState, useEffect} from 'react'
import classes from './RocketCard.css'


let attachClasses = "py-8 px-8 max-w-sm mx-auto bg-color-red bg-red rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"

const RocketCard = (props) => {
    const [cardState, setCardState] = useState(false)

    useEffect( () => {
        console.log(props.rocket.rocket_name+" BEFORE CONDITION "+cardState)
        console.log(attachClasses)
        if(!cardState){
            console.log(props.rocket.rocket_name+" IF "+cardState)
            attachClasses = "py-8 px-8 max-w-sm mx-auto bg-color-red bg-red rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
        }else{
            console.log(props.rocket.rocket_name+" ELSE "+cardState)
            attachClasses = "py-8 px-8 max-w-sm mx-auto bg-color-red bg-red rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
        }
    })

    return(
        <div className={attachClasses} onClick={() => setCardState(!cardState)}>
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