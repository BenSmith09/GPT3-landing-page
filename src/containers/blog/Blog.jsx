import React from "react";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import { Article } from "../../components";

const Blog = () => {
  return (
    <div className="gpt3__blog section padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Apr 12, 2023"
            title="Open AI is the future. Let us explore the magnitude of technology"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Apr 10, 2023"
            title="Open AI is the future. Let us explore the magnitude of technology"
          />
          <Article
            imgUrl={blog03}
            date="Apr 10, 2023"
            title="Open AI is the future. Let us explore the magnitude of technology"
          />
          <Article
            imgUrl={blog04}
            date="Apr 10, 2023"
            title="Open AI is the future. Let us explore the magnitude of technology"
          />
          <Article
            imgUrl={blog05}
            date="Apr 10, 2023"
            title="Open AI is the future. Let us explore the magnitude of technology"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
