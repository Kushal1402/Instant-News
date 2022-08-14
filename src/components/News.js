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

  // variable articles (array of data)
  //   articles = [
  //     {
  //         "source": {
  //             "id": "bbc-sport",
  //             "name": "BBC Sport"
  //         },
  //         "author": "BBC Sport",
  //         "title": "Shane Warne memorial - watch & follow updates",
  //         "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
  //         "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
  //         "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
  //         "publishedAt": "2022-03-30T08:22:26.498888Z",
  //         "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "espn-cric-info",
  //             "name": "ESPN Cric Info"
  //         },
  //         "author": null,
  //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //         "publishedAt": "2020-04-27T11:41:47Z",
  //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "espn-cric-info",
  //             "name": "ESPN Cric Info"
  //         },
  //         "author": null,
  //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //         "publishedAt": "2020-03-30T15:26:05Z",
  //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //     }
  // ];


 
  // Constructor
  constructor(){
    super();
    // console.log("Hello i'm a constructor from news component");
    this.state = {
      articles : [],
      loading : false,
      // For pagination
      page : 1
    }
  }

  // Lifecycle  
  async componentDidMount(){
    console.log("Rendered after main Render");
    // For fetch there is an url
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    // By using await we will fetch the whole data
    let data = await fetch(url);
    // This data is parsed in Kson
    let parsedData = await data.json()
    console.log("After await", parsedData);
    
    // This will go and put the data into the cards my in NewsItem.js
    this.setState({articles : parsedData.articles,
      totalResults : parsedData.totalResults,
      loading:false
    })
  }

  // Handling the Next, Previous click
  handleNextClick = async() => {
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json()
      
      this.setState({
        page : this.state.page + 1,
        articles : parsedData.articles,
        loading : false
      })
    }
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    
    this.setState({
      page : this.state.page - 1,
      articles : parsedData.articles,
      loading : false
    })
  }

  render() {
    return (
      <div className='container mt-5 mb-3'>
        <h1 className='text-center'>Instant News - Top Headlines</h1>
        
        {/* For loading */}
        {this.state.loading && <Spinner />}
        
        {/* For getting the data by json and maping and then showing putting to UI */}
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