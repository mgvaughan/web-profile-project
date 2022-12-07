import React from 'react';

const Games = (props: PortfolioCardProps) => {
    return (
        <div className="card shadow my-4">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.thumbnail} alt="" className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="cardbody">
                        <h4 className="card-title text-center">{props.cardTitle}</h4>
                        <p className="card-subtitle p-2">{props.description}</p>
                        <p className="card-subtitle p-2"><span className="fw-bold">Keywords: </span>{props.theme}</p>
                        <a href={props.website} className="btn btn-primary">Click Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface PortfolioCardProps {
    thumbnail: string;
    cardTitle: string;
    description: string;
    theme: string;
    website: string;
}

export default Games;
