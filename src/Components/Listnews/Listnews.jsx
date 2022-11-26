import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const News = () => {
  const { news, getNews } = useContext(GlobalContext);

  useEffect(() => {
    getNews();
  }, []);

  const newsItem = news.map((newsItem) => {
    return (
      <div key={newsItem.id}>
        <h1>{newsItem.title}</h1>
        <p>{newsItem.abstract}</p>
        <img src={newsItem.url} />
      </div>
    );
  });

  return <div>{newsItem}</div>;
};

export default News;
