import React, { Component } from "react";

class HeaderLinks extends Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={this.props.LinkUrl}>
          {this.props.LinkName ? (
            this.props.LinkName
          ) : (
            <img src={this.props.img} />
          )}
        </a>
      </li>
    );
  }
}

export default HeaderLinks;
