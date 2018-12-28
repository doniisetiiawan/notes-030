import React, { Component } from "react";
import Header from "../shared/components/layout/Header";
import Content from "../shared/components/layout/Content";
import Footer from "../shared/components/layout/Footer";

import Notes from "./Notes/Notes";
import { notes1, notes2 } from "./Notes/data";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: notes1
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        notes: [...this.state.notes, ...notes2]
      });
    }, 10000);
  }

  render() {
    return (
      <div className="App">
        <Header title="Welcome to Codejobs" />
        <Content>
          <Notes notes={this.state.notes} />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
