import React, { useState } from 'react'
import Newsaitem from './Newsaitem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"
import { useEffect } from 'react'

const Newsa = (props) => {

    const [articles, setarticles] = useState([])
    // const [loading, setloading] = useState(false)
    const [page, setpage] = useState(1)
    // const [pagesize, setpagesize] = useState(5)
    const [totalresult, settotalresult] = useState(0)

    const newupdate = async () => {
        let url1 = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=858bf2b1043a40549e8288fe39d54fae&page=1&pageSize=5`
        let data = await fetch(url1)
        let parsedata = await data.json()

        setarticles(parsedata.articles)
        settotalresult(parsedata.totalResults)


    }
    useEffect(() => {
        newupdate()
   // eslint-disable-next-line
    }, [])

   
    const fetchMoreData = async () => {
        setpage(page + 1)
        let url1 = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=858bf2b1043a40549e8288fe39d54fae&page=${page}&pageSize=5`
        let data = await fetch(url1)
        let parsedata = await data.json()

        setarticles(articles.concat(parsedata.articles))

        settotalresult(parsedata.totalResults)

    };

    return (

        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalresult}
            loader={<h4>Loading...</h4>}
        >
            <div className="container" >
                <div className="row " >
                    {
                        articles.map((element) => {
                            return <div className="col-md-3  row mx-5 my-5 ">
                                <Newsaitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} url={element.urlToImage} newsurl={element.url} date={element.publishedAt} author={element.author} name={element.source.name} />
                            </div>
                        })}
                </div>
            </div >
        </InfiniteScroll>
    )

}

Newsa.defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'entertainment'
}
Newsa.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default Newsa
