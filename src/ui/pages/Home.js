import React from "react";
// import Main from "../components/Main";
// import SideBar from "../components/SideBar";
import { Container, Row, Col } from "react-bootstrap";

const Home = (props) => {
  console.log("home props =>", props.articles);
  const { articles } = props
  if (articles.length) {


    return (
      <div className="container">
        <h4>Articles</h4>
        {articles.map(article => {


          return (
            <div key={article.id}>
              <hr />
              <h4>{article.title}</h4>
              <small>id:{article.id}</small>
              <p>{article.content}</p>
            </div>
          );
        })}
      </div>
    )
  }

  else { return (<div>No Articles</div>) }




};

export default Home;
