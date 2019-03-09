import React, { Component } from "react";
import { getQuote } from "./../../services/getQuote";
import "./Quote.css";

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      backgroundColor: ""
    };
  }

  componentDidMount() {
    this.setState({ quotes: getQuote() });
  }
  quoteHandler() {
    const { quotes } = this.state;

    const index = Math.floor(Math.random() * 5) + 0;

    document.getElementById("text").innerText = quotes[index].text;
    document.getElementById("author").innerText = quotes[index].author;
  }
  render() {
    return (
      <React.Fragment>
        <div className="wrapper" id="quote-box">
          <div className="card p-5 centered col-xs-12 col-sm-6 col-md-6">
            <div className="">
              <blockquote className="h5 text-center pb-3" id="text">
                {" "}
                "Either write something worth reading or do something worth
                writing."{" "}
              </blockquote>
              <footer>
                {" "}
                <cite id="author" className=" pt-3 text-right">
                  Benjamin Franklin
                </cite>{" "}
              </footer>
            </div>
            <div className="d-flex">
              <a id="tweet-quote" href="twitter.com/intent/tweet">
                {" "}
                <button className="btn mr-1 text-white bg-primary">
                  <i className="devicon-twitter-plain" />
                </button>
              </a>
              <button className="btn px-3  bg-primary  text-white">
                <i className="fab fa-tumblr" />
              </button>
              <button
                onClick={() => this.quoteHandler()}
                className="ml-auto bg-primary btn text-white"
                id="new-quote"
              >
                New Quote
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Quote;
