import React from 'react';

const PortfolioCard = (props: PortfolioCardProps) => {
    return (
        <div className="row g-0 justify-content-center my-5">
            <div className="col-md-10">
                <div className="card shadow">
                    <div className="row g-0">
                        <div className="col-md-4 d-flex align-items-stretch">
                            <img src={props.thumbnail} alt="" className="img-fluid rounded-start" />
                        </div>
                        <div className="col-md-8">

                            <div className="px-2">
                                <h4 className="card-title text-center mt-1">{props.cardTitle}</h4>
                                <p className="card-subtitle p-2">{props.description}</p>
                                <h6 className="card-subtitle p-2"><span className="fw-bold">Technical Skills Used: </span>{props.skills}</h6>
                            </div>
                            <div className="row g-0">
                                <a href={props.website} className="btn btn-secondary">Click Link!</a>
                            </div>


                        </div>
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
    skills: string;
    website: string;
}

export default PortfolioCard;
