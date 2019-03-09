import React, { Component } from "react";
import { getQuote } from "./../../services/getQuote";
import "./Quote.css";

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
    };
  }

  componentDidMount() {
    this.setState({ quotes: getQuote() });
  }
  quoteHandler() {
    const { quotes } = this.state;

    const hue =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      ", " +
      Math.floor(Math.random() * 256) +
      ", " +
      Math.floor(Math.random() * 256) +
      ")";
    const index = Math.floor(Math.random() * 5) + 0;

    document.getElementById("text").innerText = quotes[index].text;
    document.getElementById("author").innerText = quotes[index].author;
    document.querySelector(".wrapper").style.background = hue;
    document.getElementById("text").style.color = hue;
    document.getElementById("new-quote").style.background = hue;
    document.getElementById("tumblr").style.background = hue;
    document.getElementById("tweet-quote").style.background = hue;
    document.getElementById("author").style.color = hue;
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
              <a
                id="tweet-quote"
                className="mr-1  initialColor btn  text-white "
                href="twitter.com/intent/tweet"
              >
                {" "}
                <i className="devicon-twitter-plain" />
              </a>
              <button
                id="tumblr"
                className="initialColor btn px-3    text-white"
              >
                <i className="fab fa-tumblr" />
              </button>
              <button
                onClick={() => this.quoteHandler()}
                className="ml-auto initialColor btn text-white"
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
