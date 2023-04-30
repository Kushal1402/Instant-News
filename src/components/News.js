import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'  

class News extends Component {
  // PropTypes
  static defaultProps = {
    country: 'in',
    pageSize: 8, 
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number, 
    category: PropTypes.string,
  }

  constructor(){
    super();
    
    this.state = {
      articles : [],
      loading : false,
      page : 1
    }
  }
  
  async updateNews(){    
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    
    let data = await fetch(url);
    let parsedData = await data.json()
  
    this.setState({articles : parsedData.articles,
      totalResults : parsedData.totalResults,
      loading:false
    })
  }
  // Lifecycle  
  async componentDidMount(){
    // For fetch there is an url
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // // By using await we will fetch the whole data
    // let data = await fetch(url);
    // // This data is parsed in Kson
    // let parsedData = await data.json()
    // console.log("After await", parsedData);
    
    // // This will go and put the data into the cards my in NewsItem.js
    // this.setState({articles : parsedData.articles,
    //   totalResults : parsedData.totalResults,
    //   loading:false
    // })
    this.updateNews();
  }

  // Handling the Next, Previous click
  handleNextClick = async() => {
    this.setState({page : this.state.page + 1});
    this.updateNews();
  }
  handlePrevClick = async () => {
    this.setState({page : this.state.page - 1});
    this.updateNews();
  }

  render() {
    return (
      <div className='container mt-5 mb-3'>
        <h1 className='text-center pt-2'>Instant News - Top Headlines</h1>
        
        {/* For loading */}
        {this.state.loading && <Spinner />}
        
        {/* For getting the data by json and maping and then showing to UI */}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}> 
                      <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0,81) : ""} urlToImage={element.urlToImage} newsUrl={element.url} />
                    </div>  
          })}         
        </div>
        
        {/* Previous & Next Buttons */}
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News