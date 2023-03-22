import React, { Component } from "react";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Main from "./Component/main/Main";
import YoutubApi from "./Component/YoutubApi";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        {/* <YoutubApi /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
