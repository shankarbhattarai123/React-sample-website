import React from 'react'

export default function Add(props) {
    return (
        <>       
            <div className="card container my-5" style={{width: "18rem"}}>
                <img className="card-img-top" src={props.imgsrc} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.cardTitle}</h5>
                        <p className="card-text">{props.cardText}</p>
                        <a href={props.link} className="btn btn-primary">Watch Now</a>
                    </div>
                    </div>
        </>
    );
}
