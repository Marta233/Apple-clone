import React, { Component } from "react";
import Alert from "../alert/Alert";
import Section from "../main/sections/Section2/Section";
import Section1 from "../main/sections/Section1/Section1";
import Section3 from "../main/sections/Section3/Section3";
import Section4 from "../main/sections/Section4/Section4";
import Section5 from "../main/sections/Section5/Section5";
import Section6 from "../main/sections/Section6/Section6";
import YoutubApi from "../YoutubApi";
// import YoutubApi from "../YoutubApi";
class Main extends Component {
  render() {
    return (
      <div>
        <Alert />
        <Section1 />
        <Section />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <YoutubApi />
      </div>
    );
  }
}

export default Main;
