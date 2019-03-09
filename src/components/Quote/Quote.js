import React, { Component } from "react";

import "./Quote.css";

class Quote extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrapper" id="quote-box">
          <div
            className="card p-5 centered col-xs-12 col-sm-6 col-md-6"
            data-aos="fade-down"
          >
            <div className="">
              <blockquote className="h5 text-center pb-3" id="text">
                {" "}
                "Either write something worth reading or do something worth
                writing."{" "}
                <footer>
                  {" "}
                  <cite id="author" className=" pt-3 text-right">
                    Benjamin Franklin
                  </cite>{" "}
                </footer>
              </blockquote>
            </div>
            <div className="d-flex">
              <a  id="tweet-quote" href="twitter.com/intent/tweet">
                {" "}
                <button
                 
                  className="btn mr-1 text-white bg-primary"
                >
                  <i className="devicon-twitter-plain" />
                </button>
              </a>
              <button className="btn px-3  bg-primary  text-white">
                <i class="fab fa-tumblr" />
              </button>
              <button
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
