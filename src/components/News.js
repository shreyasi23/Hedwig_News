import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component{
    articles = [{
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Aya Elamroussi",
        "title": "Idaho suspect in student murders thoroughly cleaned vehicle, also seen wearing surgical gloves multiple times outside family home, source says",
        "description": "The man accused of murdering four University of Idaho students in November had thoroughly cleaned the interior and exterior of his car and was also seen wearing surgical gloves multiple times before being apprehended, a law enforcement source tells CNN.",
        "url": "http://us.cnn.com/2023/01/06/us/idaho-killings-suspect-bryan-kohberger-friday/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230105134403-03-kohberger-hearing-0105.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-01-06T09:13:05Z",
        "content": "The man accused of murdering four University of Idaho students in November had thoroughly cleaned the interior and exterior of his car and was also seen wearing surgical gloves multiple times before … [+5429 chars]"
    },
    {
        "source": {
            "id": "news-com-au",
            "name": "News.com.au"
        },
        "author": null,
        "title": "Body found at popular family beach",
        "description": "A body has been found at a family friendly swimming beach in Sydney Harbour this afternoon.",
        "url": "https://www.news.com.au/national/nsw-act/news/body-found-in-water-in-little-manly-cove/news-story/a3e90d9b509b2f52b852c77c8ff858b1",
        "urlToImage": "https://content.api.news/v3/images/bin/38b1431200efc4b7f79abd3c2cdd7969",
        "publishedAt": "2023-01-06T09:09:00Z",
        "content": "A body has been found at a family friendly swimming beach in Sydney Harbour this afternoon. \r\nEmergency authorities rushed to Manly Peace Park on Smedleys Point near Manly at about 3pm on Friday afte… [+355 chars]"
    },
    {
        "source": {
            "id": "google-news-in",
            "name": "Google News (India)"
        },
        "author": null,
        "title": "\"Begged Me... Said He's A Family Man\": Air India Flyer On 'Peeing' Shocker",
        "description": "After a drunk passenger urinated on a woman flyer in the business class of an Air India flight last year, the crew brought him to her seat and forced her to face him as he begged to be spared arrest, a document reveals.",
        "url": "https://www.ndtv.com/india-news/air-india-flyer-on-peeing-shocker-begged-me-said-hes-a-family-man-3668438",
        "urlToImage": "https://c.ndtvimg.com/2023-01/if1u9qs8_air-india-generic_625x300_04_January_23.jpg",
        "publishedAt": "2023-01-06T08:57:00+00:00",
        "content": "The woman has detailed her \"appalling experience\" in her letter to Air India, which is part of the FIR.\r\nNew Delhi: After a drunk passenger urinated on a woman flyer in the business class of an Air I… [+3770 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Harry book details family rows and anger over Diana",
        "description": "Prince Harry's autobiography, Spare, reveals a series of grievances and accusations towards the Royal Family.",
        "url": "http://www.bbc.co.uk/news/live/uk-64183891",
        "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
        "publishedAt": "2023-01-06T07:52:21.9669637Z",
        "content": "Thirty years ago, writer Andrew Morton collaborated with Harry's mother Diana, on the book Diana: Her True Story.\r\nHe's been speakng to the BBC about Prince Harry's memoir and the furore it has cause… [+328 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Prince Harry book recalls trauma of Diana's death",
        "description": "The duke's bombshell memoir reveals his grief and anger at losing his trust for his family.",
        "url": "http://www.bbc.co.uk/news/uk-64182513",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5BE1/production/_128212532_hi080875852.jpg",
        "publishedAt": "2023-01-06T07:37:24.7409105Z",
        "content": "From losing his mother, losing his trust in his family to losing his virginity, Prince Harry's bombshell memoir, Spare, leaves few royal stones unturned.\r\nPrince Harry's life story describes fighting… [+3742 chars]"
    },
    {
        "source": {
            "id": "google-news-uk",
            "name": "Google News (UK)"
        },
        "author": "Lyell Tweed",
        "title": "Tragic beautician was sat in the middle of the road when a car ploughed into her",
        "description": "Antonia St Louis was a 'loving daughter, sister and granddaughter', her family said",
        "url": "https://www.manchestereveningnews.co.uk/news/greater-manchester-news/tragic-beautician-sat-middle-road-25906969",
        "urlToImage": "https://i2-prod.manchestereveningnews.co.uk/incoming/article25906987.ece/ALTERNATES/s1200/0_JS224107221.jpg",
        "publishedAt": "2023-01-06T06:54:20+00:00",
        "content": "A young woman died after being hit by a car while sat in the road, an inquest heard. Antonia St Louis, 27, suffered 'unsurvivable injuries' after the crash on Manchester Road, Ashton-under-Lyne, in t… [+5517 chars]"
    },
    {
        "source": {
            "id": "associated-press",
            "name": "Associated Press"
        },
        "author": "MARK STEVENSON and MARÍA VERZA",
        "title": "Violence hits Mexico cartel stronghold as 'Chapo' son nabbed",
        "description": "MEXICO CITY (AP) — The sun wasn’t yet up in Culiacan when David Téllez and his family began making their way to the city’s airport for a return flight to Mexico City after their vacation. But not long after they set out they encountered the first crude roadbl…",
        "url": "https://apnews.com/d74ba460138c067ca538c862e3f0a5b0",
        "urlToImage": "https://storage.googleapis.com/afs-prod/media/40b054d8020b4a25b4b972098d3261a5/3000.jpeg",
        "publishedAt": "2023-01-06T05:01:20Z",
        "content": "MEXICO CITY (AP) — The sun wasn’t yet up in Culiacan when David Téllez and his family began making their way to the city’s airport for a return flight to Mexico City after their vacation. But not lon… [+6040 chars]"
    },
    {
        "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "N Korea’s Kim reveals daughter in hint at extending family rule",
        "description": "Kim Jong Un, who turns 39 on Sunday, is the third generation of his family to successively rule North Korea since 1948.",
        "url": "http://www.aljazeera.com/news/2023/1/6/n-koreas-kim-reveals-daughter-in-hint-at-extending-family-rule",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/01/000_32UR3ND.jpg?resize=1920%2C1440",
        "publishedAt": "2023-01-06T04:14:27Z",
        "content": "North Korean leader Kim Jong Uns presentation of his young daughter at recent public events is likely an attempt to show his people that one of his children will one day inherit the leadership in wha… [+4157 chars]"
    },
    {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "Taiyler Simone Mitchell",
        "title": "Prince Harry killed 25 people while in Afghanistan: book",
        "description": "His confession is likely to make him and his family a bigger terrorist target for the Taliban, The Independent reported.",
        "url": "https://www.insider.com/prince-harry-killed-25-people-while-in-afghanistan-book-2023-1",
        "urlToImage": "https://i.insider.com/63b78398e324de0019b820a0?width=1200&format=jpeg",
        "publishedAt": "2023-01-06T03:28:32Z",
        "content": "Prince Harry wrote in his upcoming memoir \"Spare\" that he killed more than two dozen people in Afghanistan after the army taught him not to view members of the Taliban as people, according to The Tel… [+1924 chars]"
    },
    {
        "source": {
            "id": "nbc-news",
            "name": "NBC News"
        },
        "author": "Tim Stelloh, Marlene Lenthang",
        "title": "Luck, Tesla design likely saved family that plunged off cliff, experts say",
        "description": "Survival of California family that plunged 250 feet off cliff due to luck, Tesla's design, experts say",
        "url": "https://www.nbcnews.com/news/us-news/luck-tesla-family-plunged-cliff-rcna64547",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-01/230103-tesla-cliff-accident-KNTV-snip-ac-730p-f219c2.jpg",
        "publishedAt": "2023-01-06T02:46:39Z",
        "content": "ALAMEDA, Calif.  A California doctor allegedly plunged his family hundreds of feet down a coastal cliff in what authorities have described as a murder attempt, but their improbable survival is likely… [+5361 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": null,
        "title": "Idaho murder suspect's DNA found on knife sheath at crime scene, affidavit says",
        "description": "Agents recovered trash from the Kohberger family residence in Pennsylvania and sent evidence to the Idaho State Lab to be tested, the affidavit says.",
        "url": "https://www.cbsnews.com/news/idaho-murders-suspect-bryan-kohberger-dna-knife-sheath-crime-scene-affidavit/",
        "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2022/12/31/6c4e3625-a095-458f-927e-c5fabea76c6c/thumbnail/1200x630g6/45418ae3d84c74cf6aea61b282e1ff3d/idaho-suspect-scene.jpg",
        "publishedAt": "2023-01-06T01:49:00+00:00",
        "content": "Watch \"48 Hours: The Idaho Student Murders\" — correspondent Peter Van Sant reports on Saturday, Jan. 7 at 10/9c on CBS and streaming on Paramount+.\r\nThe DNA of the man accused of killing four Univers… [+2617 chars]"
    },
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": null,
        "title": "Police said a doctor drove his Tesla off a cliff with his wife and family inside. Here's what we know.",
        "description": "Police said a doctor drove a Tesla with his wife and kids inside off a California cliff near Devil's Slide; investigators have not revealed a motive.",
        "url": "https://www.usatoday.com/story/news/nation/2023/01/05/dharmesh-patel-tesla-cliff-arrest/10994712002/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2023/01/03/USAT/6fd8aa08-631a-4c11-85c2-6da18afe00ad-AP_California_Car_Falls_Off_Cliff_3.jpg?auto=webp&crop=2999,1687,x0,y600&format=pjpg&width=1200",
        "publishedAt": "2023-01-05T22:45:10+00:00",
        "content": "A man accused of intentionally driving his Tesla off a California cliff with his family inside remained hospitalized Thursday, according to new details emerging in the near-fatal crash.\r\nDharmesh A. … [+3859 chars]"
    },
    {
        "source": {
            "id": "fox-sports",
            "name": "Fox Sports"
        },
        "author": null,
        "title": "Texas fires Chris Beard amid felony domestic violence charge",
        "description": "Texas fired basketball coach Chris Beard on Thursday while he faces a felony domestic family violence charge stemming from a Dec. 12 incident.",
        "url": "http://www.foxsports.com/stories/college-basketball/texas-fires-basketball-coach-chris-beard-amid-felony-domestic-violence-charge",
        "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/12/1408/814/beard-wide-121222.jpg?ve=1&tl=1",
        "publishedAt": "2023-01-05T20:00:41Z",
        "content": "Texas fired basketball coach Chris Beard on Thursday while he faces a felony domestic family violence charge stemming from a Dec. 12 incident involving his fiancée.\r\nThe Associated Press obtained the… [+3670 chars]"
    },
    {
        "source": {
            "id": "espn",
            "name": "ESPN"
        },
        "author": "Jeff BorzelloESPN Staff Writer ",
        "title": "Texas fires Chris Beard amid domestic family violence charge",
        "description": "Texas fired men's basketball coach Chris Beard as he faces a felony domestic family violence charge stemming from a Dec. 12 incident.",
        "url": "http://espn.go.com/mens-college-basketball/story/_/id/35386303/texas-fires-men-basketball-coach-chris-beard",
        "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1212%2Fr1105662_1296x729_16%2D9.jpg",
        "publishedAt": "2023-01-05T19:47:00Z",
        "content": "Texas head coach Chris Beard was fired Thursday, less than one month after the school suspended him without pay following his arrest on a domestic family violence charge.\r\nAssociate head coach Rodney… [+3586 chars]"
    },
    {
        "source": {
            "id": "abc-news",
            "name": "ABC News"
        },
        "author": "JIM VERTUNO AP Sports Writer",
        "title": "Texas fires Chris Beard amid felony domestic violence charge",
        "description": "Texas has fired basketball coach Chris Beard, who faces a felony domestic family violence charge after his fiancée told police he strangled and bit her",
        "url": "https://abcnews.go.com/Sports/wireStory/texas-fires-chris-beard-amid-felony-domestic-violence-96247689",
        "urlToImage": "https://s.abcnews.com/images/US/wirestory_64f650d82cd95028ad80ae5946fe2e24_16x9_992.jpg",
        "publishedAt": "2023-01-05T19:40:08Z",
        "content": "AUSTIN, Texas -- Texas has fired basketball coach Chris Beard, who faces a felony domestic family violence charge stemming from a Dec. 12 incident involving his fiancée, with the school telling his a… [+5557 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Danielle Wallace",
        "title": "California Tesla driver accused of intentionally plunging wife, kids off cliff is doctor in 'idyllic family'",
        "description": "Dharmesh A. Patel, accused of intentionally driving a Tesla carrying his wife and children off a 250-foot California cliff, is a radiologist who neighbors say led an \"idyllic\" family life.",
        "url": "https://www.foxnews.com/us/california-tesla-driver-accused-intentionally-plunging-wife-kids-cliff-doctor-idyllic-family",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/01/Tesla-Crash2-blurred.jpg",
        "publishedAt": "2023-01-05T18:27:00+00:00",
        "content": "The California man accused of intentionally driving a Tesla off a cliff earlier this week in a miraculously unsuccessful attempt to kill his wife and two young children inside is a doctor who is a pa… [+5675 chars]"
    },
    {
        "source": {
            "id": "time",
            "name": "Time"
        },
        "author": "Angela Haupt",
        "title": "The Daily Habits of Happiness Experts",
        "description": "Instead of forcing that frown upside down, try the joy-building tips experts really use, like spending more time with friends and family.",
        "url": "http://time.com/6241099/daily-habits-happiness-experts/",
        "urlToImage": "https://api.time.com/wp-content/uploads/2023/01/GettyImages-1206782800.jpg?quality=85&w=1200&h=628&crop=1",
        "publishedAt": "2023-01-05T11:59:19Z",
        "content": "If anyone knows the secret to happiness, it’s surely the people who have dedicated their careers to studying it. The first thing they’ll tell you? Being happy all the time isn’t a feasible—or even de… [+5235 chars]"
    },
    {
        "source": {
            "id": "rte",
            "name": "RTE"
        },
        "author": "RTÉ News",
        "title": "Family of 10 killed in Israeli strike on Gaza",
        "description": "A family of 10 were killed in the early hours of this morning in an Israeli air strike on the western Gaza Strip, medics in the region said, as the latest upsurge in violence in the Middle East continued for a fifth night.",
        "url": "https://www.rte.ie/news/world/2021/0515/1221736-israel-gaza/",
        "urlToImage": "https://img.rasset.ie/0016cb28-1600.jpg",
        "publishedAt": "2021-05-15T06:40:06Z",
        "content": "A family of 10 were killed in the early hours of this morning in an Israeli air strike on the western Gaza Strip, medics in the region said, as the latest upsurge in violence in the Middle East conti… [+826 chars]"
    },
    {
        "source": {
            "id": "mtv-news-uk",
            "name": "MTV News (UK)"
        },
        "author": "MTV News",
        "title": "Khloé Kardashian Reacts To “Disrespectful” Typo On Throwback Family Christmas Card",
        "description": "\"So rude!\"",
        "url": "http://www.mtv.co.uk/khloe-kardashian/news/khloe-kardashian-reacts-to-disrespectful-typo-in-throwback-family-christmas-card",
        "urlToImage": "http://www.mtv.co.uk/sites/default/files/styles/carousel_wide/public/mtv_uk/galleries/large/2020/12/18/kdash.jpg?itok=umGfTB5f",
        "publishedAt": "2020-12-18T10:02:12Z",
        "content": "Khloe Kardashian has called out a disrespectful typo on an old Christmas card the Kardashian family sent out back in the early 90s.\r\nThe mistake came to light when an Instagram account called @90sanx… [+1593 chars]"
    },
    {
        "source": {
            "id": "vice-news",
            "name": "Vice News"
        },
        "author": "Roberto Ferdman",
        "title": "Coronavirus Took Away a Huge Milestone for First-Generation Graduates: 'I Can't Stop Crying'",
        "description": "For them, graduation doesn't just commemorate a personal achievement; it's a collective milestone for the entire family, which they were supposed to celebrate together.",
        "url": "https://www.vice.com/en_us/article/akzg7j/coronavirus-took-away-a-huge-milestone-for-first-generation-graduates-i-cant-stop-crying",
        "urlToImage": "https://video-images.vice.com/test-uploads/articles/5ece997804ee25009b1333e2/lede/1590598192419-1stgencollegeclean.jpeg?crop=1xw:1xh;center,center&resize=1200:*",
        "publishedAt": "2020-05-27T19:22:23Z",
        "content": "The class of 2020 isnt exactly going out with a bang, which is a bummer for the millions of 2020 graduates. But for first-generation graduates, the cosmic injustice is even harder to swallow. For the… [+1318 chars]"
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