import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Listnews.scss";

const News = () => {
  const { news, getNews } = useContext(GlobalContext);

  useEffect(() => {
    getNews();
  }, []);

  const newsItem = news.map((newsItem) => {
    return (
      <>
        <div className="news" key={newsItem.id}>
          <img src={newsItem.multimedia[2].url} alt="Couldn't load image" />
          <div className="container">
            <h1>{newsItem.title}</h1>
            <p>{newsItem.abstract}</p>
          </div>
        </div>
      </>
    );
  });

  return <div>{newsItem}</div>;
};

export default News;
