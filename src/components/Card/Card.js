import React from 'react';
import './styles.css';

const Card = ({props}) => {
    return(
        <div>
            <ul>
                <li>
                    <span>{props.name}</span>
                </li>
                <li>
                    <span>{props.age}</span>
                </li>
                <li>
                    <span>{props.gender}</span>
                </li>
                <li>
                    <span>{props.balance}</span>
                </li>
            </ul>
            <img src={props.src} alt=""/>
        </div>
    )
}

export default Card;