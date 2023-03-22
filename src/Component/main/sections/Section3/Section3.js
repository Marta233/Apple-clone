import React, { Component } from "react";
import SectionLink from "../../sectionLink";
class Section3 extends Component {
  render() {
    return (
      <div>
        <section class="third-hightlight-wrapper">
          <div class="container">
            <SectionLink
              csss="title-wraper bold"
              name="iPhone 11 Pro"
              descripcsss="description-wrapper"
              cssprice=" price-wrapper grey"
              descrip=" Pro cameras. Pro display. Pro performance."
              price=" From $24.95/mo. or $599 with trade‑in."
            />
          </div>
        </section>
      </div>
    );
  }
}
export default Section3;
