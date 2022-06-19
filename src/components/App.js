import React, { Component } from 'react';
import Header from './Header';
import Team from './Teams/Team';
import Social from './SocialMedia/Social';
import HomeWork1 from './homeworks/Homework_1';
import File from './File';
import Counter from './Counter/Counter';
import LastWork from './LastHomeWork/Lasthomework';
import './../style.css';

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return(
      <div className = "container">
          <Header />
          {/* <Social />
          <HomeWork1 /> */}
          <Team />
          {/* <File firstName = "Afraa" lastName = "Hakouk"/>
          <Counter /> */}
          <LastWork />
      </div>
    );
  }
}

export default App;