import React from 'react';
import { Link } from 'react-router-dom';

const AboutCard = (props) => {
    return (
        <li className="one_third">
            <article><Link to={props.url}><i className="fas fa-hourglass-half"></i></Link>
                <h6 className="heading">{props.heading}</h6>
                <p>{props.description}</p>
            </article>
        </li>

    )
}

export default AboutCard;
