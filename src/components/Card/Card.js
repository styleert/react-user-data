import React from 'react';
import './styles.css';

const Card = ({name, age, gender, balance, src}) => {
    return(
        <div>
            <ul>
                <li>
                    <span>{name}</span>
                </li>
                <li>
                    <span>{age}</span>
                </li>
                <li>
                    <span>{gender}</span>
                </li>
                <li>
                    <span>{balance}</span>
                </li>
            </ul>
            <img src={src} alt=""/>
        </div>
    )
}

export default Card;