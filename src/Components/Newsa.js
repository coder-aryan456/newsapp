import React, { Component } from 'react'
import Newsaitem from './Newsaitem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"
export class Newsa extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'entertainment'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
            , pagesize: 5,
            totalresult: 0
        }
    }
    async componentDidMount() {
        let url1 = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=858bf2b1043a40549e8288fe39d54fae&page=1&pageSize=5`
        let data = await fetch(url1)
        let parsedata = await data.json()
        this.setState({
            articles: parsedata.articles,
            totalresult: parsedata.totalResults
        })
    }
    // handlenextclick = async () => {
    //     this.setState({ loading: true })
    //     let url1 = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=858bf2b1043a40549e8288fe39d54fae&page=${this.state.page + 1}&pageSize=${this.state.pagesize}`
    //     let data = await fetch(url1)
    //     let parsedata = await data.json()
    //     this.setState({
    //         articles: parsedata.articles,
    //         page: this.state.page + 1,
    //         loading: false
    //     })
    // }
    // handleprevclick = async () => {
    //     this.setState({ loading: true })
    //     let url1 = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=858bf2b1043a40549e8288fe39d54fae&page=${this.state.page - 1}&pageSize=${this.state.pagesize}`
    //     let data = await fetch(url1)
    //     let parsedata = await data.json()
    //     this.setState({
    //         articles: parsedata.articles,
    //         page: this.state.page - 1,
    //         loading: false
    //     })
    // }
    // cococ=()=>{
    //     document.body.style="dark"
    // }
    fetchMoreData = async () => {
     this.setState({page:this.state.page+1})
        let url1 = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=858bf2b1043a40549e8288fe39d54fae&page=${this.state.page}&pageSize=5`
        let data = await fetch(url1)
        let parsedata = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedata.articles),
            totalresult: parsedata.totalResults
        })
    };
    render() {
        return (
            <div className="container" >
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalresult}
                    loader={<h4>Loading...</h4>}
                >
                    <div className="row " >
                        {
                            this.state.articles.map((element) => {
                                return <div className="col-md-3  row mx-5 my-5 ">
                                    <Newsaitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} url={element.urlToImage} newsurl={element.url} date={element.publishedAt} author={element.author} name={element.source.name} />
                                </div>
                            })}
                    </div>
                </InfiniteScroll>
                {/* <div class=" container d-flex justify-content-between ">
                    <button onClick={this.handleprevclick} disabled={this.state.page <= 1} type="button" class="btn btn-dark my-3">&larr; prev</button>
                    <button onClick={this.handlenextclick} disabled={this.state.page >= 4} type="button" class="btn btn-dark my-3" >next &rarr;</button>
                </div> */}

            </div>

        )

    }
}

export default Newsa
