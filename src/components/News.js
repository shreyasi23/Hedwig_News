import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component{

    constructor(){
        super();
        console.log("News component constructor");
        this.state = {
            articles: [],
            page: 1,
            totalResults: 38
        }
    }

    // function for fetching news articles from the News API
    async componentDidMount(){
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6153d69e2eca43429dfea747c28d86fb&page=1&pageSize=20";
        let data = await fetch(url);  // fetch API
        let parsedData = await data.json(); // convert data to json file
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResult: parsedData.totalResult
        });
    }

    // function for handling click event for previous button
    handlePrevClick = async ()=>{
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6153d69e2eca43429dfea747c28d86fb&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);  // fetch API
        let parsedData = await data.json(); // convert data to json file
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }

    // function for handling click event for next button
    handleNextClick = async ()=>{
        console.log("Next");
        if((this.state.page+1 > Math.ceil(this.state.totalResults/20))){
            
        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6153d69e2eca43429dfea747c28d86fb&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);  // fetch API
            let parsedData = await data.json(); // convert data to json file
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }

    render(){
        return(
            <div className = "container my-3">
                <div className = "row">
                    {this.state.articles.map((element)=>{
                        return <div className = "col-md-4" key = {element.url}>
                            <NewsItem title = {element.title?element.title:" "} description = {element.description?element.description.slice(0,88):" "} imgUrl = {element.urlToImage?element.urlToImage:"../Images/owl_logo.jpg"} newsUrl = {element.url}/>
                        </div>
                    })}
                </div>
                <div className = "container d-flex justify-content-between" id = "next_prev_box">
                    <button disabled = {this.state.page <= 1} className = "btn My_btn_style" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled = {this.state.page+1 > Math.ceil(this.state.totalResults/20)}className = "btn My_btn_style" id = "next_btn" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}