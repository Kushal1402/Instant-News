import React, { Component } from 'react'

class NewsItem extends Component {

  render() {

    // Destructuring of Title and Description  
    let {title, description, urlToImage, newsUrl} = this.props;

    // Return NewsItem Card
    return (
      <div>
        <div className="my-5">
          <div className="card">
            <img src={!urlToImage ? "https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=598&q=80":urlToImage} className="card-img-top" alt="img" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}...</p>
              <a rel='noreferrer' href={newsUrl} target="_blank">
                <button className="btn btn-sm btn-primary">
                  Read more...
                </button>
              </a>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}
export default NewsItem