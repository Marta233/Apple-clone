import React, { Component } from "react";

export default class extends Component {
  render() {
    const { classNameName } = this.props;
    return (
      <div className="container">
        <div className="new-alert">New</div>
        <div className={this.props.csss}>{this.props.name}</div>

        <div className={this.props.descripcsss}>
          {this.props.descrip ? this.props.descrip : null}
        </div>
        <div className={this.props.cssprice}>
          {this.props.price ? this.props.price : null}
        </div>
        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Buy</a>
            </li>
          </ul>
        </div>
        <div className="ipod-caption row">
          <div className="col-sm-12 col-md-6 text-md-right">
            {this.props.rating ? this.props.rating : null}
          </div>
          <div className="col-sm-12 col-md-6 text-md-left">
            {this.props.Keyboard ? this.props.Keyboard : null}
          </div>
        </div>
      </div>
    );
  }
}
