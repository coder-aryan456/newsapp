import React, { Component } from 'react'

export class Newsaitem extends Component {
    render() {
        let { title, description, url, newsurl, author, date,name } = this.props;
        return (
            <div class="container "   >
                <div class="card card text-bg-dark mb-3 " style={{ width: "18rem" }}>
                
                    <img class="card-img-top" src={url} alt="" />
                    <span class=" card-top badge badge-danger text-danger">{name}</span>
                    <div class="card-body">
                    
                        <h5 class="card-title"><strong>{title}  </strong>  </h5>
                        <p class="card-text">{description}</p>
                        <div class="card-footer p-3 mb-2 bg-secondary ">
                            <small class="">Last updated on {new Date(date).toGMTString()}</small>
                            <br />
                            <small class="text-white">  <strong>AUTHOR:</strong>  {!author ? "Aryan" : author}</small>
                        </div>
                        <a href={newsurl} class="btn btn-sm btn-secondary"><strong>click-here</strong> </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsaitem
