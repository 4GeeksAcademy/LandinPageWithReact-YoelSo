import React from 'react'

const Card = ({ title, description, imgUrl }) => {
    return (
        <div className="col-md-6 col-lg-3 mt-4 justify-content-center">
            <div className="card">
                <img src={imgUrl} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type speci </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Card
