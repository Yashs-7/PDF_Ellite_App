import React from 'react'

const CardHome = (props) => {
    return (
    <li className="one_quarter">
        <article >
            <img src={props.imgUrl}  alt="#"  style={{borderRadius:'10%', width:'100rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} />
            <h6 className="heading">{props.heading}</h6>
            <p>{props.description}</p>
        </article>
    </li>

    )
}

export default CardHome
