import React from "react";

function CardPoliticians({ politic }) {
    return (
        <div className="card my-3">
            <img className="w-full h-90 object-cover" src={politic.image} alt={politic.name} />
            <div className="card-body">
                <h5 className="card-title font-bold">{politic.name}</h5>
                <h6 className="card-title font-bold">Posizione: {politic.position}</h6>
                <p className="card-text">{politic.biography}</p>
            </div>
        </div>
    );
}

export default React.memo(CardPoliticians)