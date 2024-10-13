import React from 'react';

const CardLayanan = ({ src, title, price }) => {
    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Price: Rp {price}</p>
            </div>
        </div>
    );
};

export default CardLayanan;
