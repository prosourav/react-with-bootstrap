import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Article = () => {
    const [articles, setNews] = useState([]);
    useEffect(()=>{
        const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-05&sortBy=publishedAt&apiKey=b7ac2d733a6d420ab841fc83cc866f06';
        fetch(url)
        .then(res=> res.json())
        .then(data => setNews(data.articles));     
       
    }, []);
    return (
        <div>
           {
            articles.map(articles=><News articles={articles} key={articles.author}></News>)
           }
           
        </div>
    );
};

export default Article;