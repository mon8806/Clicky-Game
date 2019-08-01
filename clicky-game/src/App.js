import React, { Component, Fragment } from 'react';
import MatchCard from "./components/MatchCard";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import dogs from "./dogs.json";

function randomDogs(array){
  for(let i=array.length -1; i>0; i--){
    let d= Math.floor(Math.random() *(i+1));
    [array[i], array[d]]=[array[d], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    dogs,
    score: 0,
    topScore: 0,
    titleDisplay: "Choose a dog to play the Game!",
    clicked: []
  };

  handleClick = id =>{
    if(this.state.clicked.indexOf(id) === -1){
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id)});
    }else{
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      titleDisplay: "You guessed correctly!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ titleDisplay: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset =()=>{
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      titleDisplay: "Choose a dog to play the Game!",
      clicked: []
    })
  }

  handleShuffle =()=>{
    let shuffledDogs = randomDogs(dogs);
    this.setState({ dogs: shuffledDogs});
  };

  render() {
    return <Fragment>
      <Nav score={this.state.score} topScore={this.state.topScore}/>
      <Title titleDisplay = {this.state.titleDisplay}/>
      <Wrapper>
        {this.state.dogs.map(dog=>(
          <MatchCard
          key={dog.id}
          handleClick={this.handleClick}
          id={dog.id}
          image={dog.image}
          />
        ))}
      </Wrapper>
    </Fragment>
  }
}

export default App;
