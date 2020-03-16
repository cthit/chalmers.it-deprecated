import React, { useState, useEffect } from "react";
import { DigitLayout } from "@cthit/react-digit-components";
import NewsPost from "../news-post";
import Axios from "axios";

const AllNewsPosts = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    Axios.get("/news")
      .then(res => setNews(res.data))
      .catch(err => console.log(err));
    return () => {};
  }, []);

  return (
    <DigitLayout.Size width={"800px"} minWidth={"300px"}>
      <DigitLayout.Column>
        {news.map(newsPost => (
          <NewsPost
            title={newsPost.title}
            img={newsPost.img}
            text={newsPost.text}
          />
        ))}
      </DigitLayout.Column>
    </DigitLayout.Size>
  );
};

export default AllNewsPosts;
