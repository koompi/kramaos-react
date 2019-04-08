import React, { Component } from "react";
import axios from "axios";

function strip_html_tags(str) {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/<[^>]*>/g, "");
}

class Events extends Component {
  state = {
    data: []
  };
  async componentDidMount() {
    await axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@koompi`
      )
      .then(res => {
        this.setState({ data: res.data.items });
      });
  }
  render() {
    return (
      <React.Fragment>
        <div className="ui container">
          <center>
            <h1 className="kosmosConent">Recently Event Blog</h1>
          </center>
          <div className="ui stackable three column grid">
            {console.log(this.state.data)}
            {this.state.data.slice(0, 6).map(d => (
              <div className="column blur" key={d.pubDate}>
                <a target="_blank" rel="noopener noreferrer" href={d.link}>
                  <center className="shadowEvent">
                    <div
                      style={{
                        backgroundImage: `url("${d.thumbnail}")`,
                        height: "200px",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                      }}
                    />

                    <div className="index-background">
                      <p className="byDate">
                        <span>{new Date(d.pubDate).toDateString()}</span>
                      </p>
                      <h4>
                        {d.title.length > 60
                          ? d.title.substring(0, 60) + "..."
                          : d.title.substring(0, 60)}
                      </h4>
                      <p className="index-description">
                        {strip_html_tags(d.content.substring(0, 130) + "...")}
                      </p>
                      {/* <p>
                        {d.content.length > 110
                            ? d.content.substring(0, 110) + "..."
                            : d.content.substring(0, 110)}
                        </p> */}
                      <p className="bySomeOne">
                        By: <span>{d.author}</span>
                      </p>
                    </div>
                  </center>
                </a>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Events;
