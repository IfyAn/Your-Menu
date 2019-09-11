import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {
        const {
             image_url, 
             title, 
            source_url, 
           publisher, 
           recipe_id
               } = this.props.recipe;
    const { handleDetails } = this.props      
        return (
            <React.Fragment>
                <div className="mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card">
                        <img 
                        src={image_url}
                        className='img-card-top' 
                        style={{height: '14rem'}}
                        alt="recpie"/>
                        <div className="card-body text-capitalize">
                            <h6>{title}</h6>
                            <h6 className="text-warning text-slanted">provided by the{publisher}</h6>
                        </div>
                            <div className="card-footer">
                                <button type='btn' className="btn btn-primary text-capitalize " onClick={()=>handleDetails(0,recipe_id)}>
                                    details
                                </button>
                                <a href={source_url} className="btn btn-success mx-2 text-capitalize"
                                target='_blank'
                                rel='noopener noreferrer'
                                >recipe url
                                </a>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
