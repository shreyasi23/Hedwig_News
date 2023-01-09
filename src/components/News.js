import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component{

    constructor(){
        super();
        console.log("News component constructor");
        this.state = {
            articles: []
        }
    }

    // fetching news articles from the News API
    async componentDidMount(){
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6153d69e2eca43429dfea747c28d86fb";
        let data = await fetch(url);  // fetch API
        let parsedData = await data.json(); // convert data to json file
        console.log(parsedData);
        this.setState({articles: parsedData.articles});
    }

    render(){
        return(
            <div className = "container my-3">
                <div className = "row">
                    {this.state.articles.map((element)=>{
                        return <div className = "col-md-4" key = {element.url}>
                            <NewsItem title = {element.title} description = {element.description.slice(0,88)} imgUrl = {element.urlToImage} newsUrl = {element.url}/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}