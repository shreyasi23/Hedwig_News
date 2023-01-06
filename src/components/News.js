import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component{
    articles = [{
        "source": {
            "id": "fox-sports",
            "name": "Fox Sports"
        },
        "author": null,
        "title": "Rafael Devers, Red Sox agree to 11-year, $331M extension",
        "description": "The Red Sox and superstar 3B Rafael Devers are in agreement on an 11-year, $331 million contract extension, per FOX Sports' Ken Rosenthal.",
        "url": "http://www.foxsports.com/stories/mlb/rafael-devers-red-sox-agree-to-11-year-331m-extension",
        "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/01/1408/814/Devers.jpg?ve=1&tl=1",
        "publishedAt": "2023-01-04T22:41:41Z",
        "content": "Rafael Devers will be staying in Boston for the foreseeable future.\r\nThe Red Sox have reached an agreement on an 11-year, $331 million contract extension that keeps the superstar third baseman with t… [+804 chars]"
    },
    {
        "source": {
            "id": "fox-sports",
            "name": "Fox Sports"
        },
        "author": null,
        "title": "Gregg Berhalter incident was reported by Gio Reyna's mother",
        "description": "In a statement emailed to FOX Sports, Danielle Reyna revealed she shared the details of Gregg Berhatler's 1991 domestic violence incident.",
        "url": "http://www.foxsports.com/stories/soccer/gregg-berhalter-incident-was-reported-by-gio-reynas-mother",
        "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/01/1408/814/gregg1.jpg?ve=1&tl=1",
        "publishedAt": "2023-01-04T20:21:42Z",
        "content": "The mother of United States forward Gio Reyna informed U.S. Soccer of the 1991 domestic violence incident involving U.S. coach Gregg Berhalter and his now-wife, Rosalind, Danielle Reyna said Wednesda… [+4478 chars]"
    },
    {
        "source": {
            "id": "bleacher-report",
            "name": "Bleacher Report"
        },
        "author": null,
        "title": "&#x27;The Voncast&#x27; with Myles Garrett",
        "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
        "url": "https://bleacherreport.com/videos/304730-the-voncast-with-myles-garrett",
        "urlToImage": null,
        "publishedAt": "2022-12-01T18:52:49.4768049Z",
        "content": "Myles Garrett and Von Miller talk playing in the NBA, pick their dream NFL defense and more"
    },
    {
        "source": {
            "id": "national-review",
            "name": "National Review"
        },
        "author": "Caroline Downey",
        "title": "Man Wins Elite Women’s Race at International Cyclocross Tournament",
        "description": "Killips has an online blog, Estro Junkie, which he calls ‘a newsletter about the intersection of sports and queer theory.’",
        "url": "https://www.nationalreview.com/news/man-wins-elite-womens-race-at-international-cyclocross-tournament/",
        "urlToImage": "https://www.nationalreview.com/wp-content/uploads/2022/10/transgender-flag.jpg?fit=2057%2C1200",
        "publishedAt": "2022-11-15T02:37:29Z",
        "content": null
    },
    {
        "source": {
            "id": "bleacher-report",
            "name": "Bleacher Report"
        },
        "author": null,
        "title": "☄️ NEW ANIME JUST DROPPED ☄️",
        "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
        "url": "https://bleacherreport.com/videos/289173-ja-vs-zion-anime",
        "urlToImage": null,
        "publishedAt": "2022-11-14T22:07:16.2323649Z",
        "content": null
    },
    {
        "source": {
            "id": "the-washington-times",
            "name": "The Washington Times"
        },
        "author": "The Washington Times https://www.washingtontimes.com",
        "title": "Latest Quizzes",
        "description": "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
        "url": "https://www.washingtontimes.com/quiz/",
        "urlToImage": null,
        "publishedAt": "2022-08-30T16:37:43.8583104Z",
        "content": "Featured Quizzes\r\nTake the challenge to learn about the life and career highlights of famed nonagenarian actress and comedian Betty White.\r\n Shares \r\nRead our synopsis and correctly identify a litera… [+32510 chars]"
    },
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": null,
        "title": "Daily Briefing",
        "description": "The day's top stories, from sports to movies to politics to world events.",
        "url": "https://profile.usatoday.com/newsletters/daily-briefing/",
        "urlToImage": "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
        "publishedAt": "2021-08-15T15:35:07+00:00",
        "content": "The day's top stories, from sports to movies to politics to world events."
    }]
    constructor(){
        super();
        console.log("News component constructor");
        this.state = {
            articles: this.articles
        }
    }

    render(){
        return(
            <div className = "container my-3">
                <div className = "Newsrow">
                    <div className = "col-md-4">
                        <NewsItem title = "GreatTitle" description = "AGreatDescription" imgUrl = "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/01/1408/814/Devers.jpg?ve=1&tl=1" newsUrl = ""/>
                    </div>
                </div>
            </div>
        )
    }
}