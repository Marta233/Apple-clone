import React, { Component } from "react";
import SectionLink from "../../sectionLink";

class section1 extends Component {
  render() {
    return (
      <section className="first-hightlight-wrapper">
        <SectionLink
          csss="title-wraper bold black"
          name="iPad Pro"
          rating="iPad Pro available starting 3.25"
          Keyboard="Magic Keyboard coming in May"
        />
      </section>
    );
  }
}
export default section1;
