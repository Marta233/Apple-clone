import React, { Component } from "react";
import SectionLink from "../../sectionLink";

class Section extends Component {
  render() {
    return (
      <section className="second-hightlight-wrapper">
        <SectionLink
          csss="title-wraper bold black"
          name="MacBook Air"
          descripcsss="description-wrapper black"
          descrip="  Twice the speed. Twice the storage."
          cssprice="price-wrapper grey"
          price="From $999."
        />
      </section>
    );
  }
}
export default Section;
