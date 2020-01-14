import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./components/Jumbotron/jumbotron";
import Jumbotron from "./components/Jumbotron/jumbotron";
import FriendCard from "./components/FriendCard/card";
import cards from "./friends.json";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score });
    }

    this.state.cards.forEach(card => {
      card.count = 0;
    });

    alert("Game Over \nScore: " + this.state.score);
    this.setState({ score: 0 });
  };

  shuffleArray = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  clickCount = id => {
    console.log(this.state.cards);
    this.state.cards.find((cb, i) => {
      if (cb.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 });
          this.shuffleArray(this.state.cards);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  render() {
    return (
      <div>
        <Jumbotron score={this.state.score} highscore={this.state.highscore} />
        <Wrapper>
          {this.state.cards.map(friend => (
            <FriendCard
              clickCount={this.clickCount}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
