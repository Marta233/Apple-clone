import React, { Component } from "react";

export default class FooterLink extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.link.map((name) => {
            return (
              <li>
                <a href="#">{name}</a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
