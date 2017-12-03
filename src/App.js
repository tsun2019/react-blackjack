import React from 'react';
// import logo from './logo.svg';
import './App.css';

//highest component
//state of shuffled deck and then ceates a game with the deck
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      deck: [...this.shuffle([
        {v:11,f:"c1"},{v:2,f:"c2"},{v:3,f:"c3"},{v:4,f:"c4"},{v:5,f:"c5"},{v:6,f:"c6"},
        {v:7,f:"c7"},{v:8,f:"c8"},{v:9,f:"c9"},{v:10,f:"c10"},{v:10,f:"c11"},{v:10,f:"c12"},{v:10,f:"c13"},
        {v:11,f:"h1"},{v:2,f:"h2"},{v:3,f:"h3"},{v:4,f:"h4"},{v:5,f:"h5"},{v:6,f:"h6"},
        {v:7,f:"h7"},{v:8,f:"h8"},{v:9,f:"h9"},{v:10,f:"h10"},{v:10,f:"h11"},{v:10,f:"h12"},{v:10,f:"h13"},
        {v:11,f:"s1"},{v:2,f:"s2"},{v:3,f:"s3"},{v:4,f:"s4"},{v:5,f:"s5"},{v:6,f:"s6"},
        {v:7,f:"s7"},{v:8,f:"s8"},{v:9,f:"s9"},{v:10,f:"s10"},{v:10,f:"s11"},{v:10,f:"s12"},{v:10,f:"s13"},
        {v:11,f:"d1"},{v:2,f:"d2"},{v:3,f:"d3"},{v:4,f:"d4"},{v:5,f:"d5"},{v:6,f:"d6"},
        {v:7,f:"d7"},{v:8,f:"d8"},{v:9,f:"d9"},{v:10,f:"d10"},{v:10,f:"d11"},{v:10,f:"d12"},{v:10,f:"d13"}
        ])],
    }; 
  }

  //shuffle function
  shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
} 

  render() {
    return (
    <div>
      <Game deck={this.shuffle(this.state.deck)}/>
    </div>
   );
  }
}

//2nd highest in hierarchy. Create Game interface with the 2 hands
class Game extends React.Component {
  //constructor for states and talking to other components
  constructor(props) {
    super(props);
    const newDeck = [...this.props.deck];
    this.state = {
      deck: newDeck,
      playerHand: [],
      houseHand: [],
      status: "Let's get started!",
    };
  }

  //create functions to handle certain events (dealing,hit,stand,restart,advice)

  handleScore = (hand) => {
    var score = 0;
    for(var i = 0; i < hand.length; i++){
      score += hand[i].v;
    }

    return score;
  }
  //this function signature is special bc it saves the "this" scope.
  handleDeal = () => {
    const newDeck = [...this.state.deck];
    const newPlayerHand = [...this.state.playerHand];
    const newHouseHand = [...this.state.houseHand];

    //deal
    newPlayerHand.push(newDeck.pop());
    newHouseHand.push(newDeck.pop());
    newPlayerHand.push(newDeck.pop());
    //need to push a card and hide it in dealerHand bc 2nd card is hidden. 
    newHouseHand.push(newDeck.pop());

    //make updates
    this.setState({
      playerHand : newPlayerHand,
      houseHand: newHouseHand,
      deck: newDeck,
      status: "Playing...",
    });
  }

  
  handleHit = () => {
    const newDeck = [...this.state.deck];
    const playerHand = [...this.state.playerHand];
    var status = this.state.status;
    
    //deal card
    playerHand.push(newDeck.pop());

    //five card charlie (the small chance it actually happens)
    
    if (this.handleScore(playerHand) > 21){
      status = "Lose";
    }
    //houseHand does not change so don't have to setState.
    this.setState({
      playerHand: playerHand,
      deck: newDeck,
      status: status
    })
  }
  
  handleStand = () => {
    //change status so something like done to notify when player is done so house can show card and play.
    this.setState({
      status: "Done"
    })
  }

  handleRestart = () => {
    const newDeck = [this.props.deck];
    const playerHand = [];
    const houseHand = [];

    this.setState({
      deck: newDeck,
      playerHand: playerHand,
      houseHand: houseHand
    })
    
 }


  render(){
    return (
      //render a status here
      <div>
        <div>
          <Hand hand={this.state.houseHand} dealer={true} status={this.state.status}/>
          <Interface
          housescore = {this.handleScore(this.state.houseHand)}
          deal={this.handleDeal}
          hit={this.handleHit}
          stand={this.handleStand}
          restart={this.handleRestart}
          status={this.state.status}
          playerscore = {this.handleScore(this.state.playerHand)}
          />
          <Hand hand ={this.state.playerHand} dealer={false}/>
        </div>
      </div>
    );
  }
}

// component to help figure out when to hit and stuff
class Result extends React.Component {
  render(){
    switch(this.props.status) {
      case "Playing...":
         return(<div className="alert alert-info" role="alert">Hit, Stand, or Restart!</div>);
         break;
      case "Win":
         return(<div className="alert alert-success" role="alert">You win! You earned my money$$ :(!</div>);    
         break;
      case "Lose":
         alert("BUST!");
         return(<div className="alert alert-danger" role="alert">You lose! Give me your money$$ :)!</div>);
         break;
      case "Done":
         alert("Let's see what the House has.");
         return<div className="alert alert-info" role="alert">House's turn</div>
         break;
      default:
        return(<div className="alert alert-info" role="alert">Let's get started!</div>);
    }
 }
}
class Hand extends React.Component {

  render() {
    return (
      <div>
        { //if dealer map, else map 
          this.props.hand.map((card,i) => {
          //if its part of the houseHand, then pass a hidden true part. 
          if (this.props.dealer && i === 1 && this.props.status !== 'Done') 
            return <Card value={card.v} face={card.f} key={card.f} hidden={true}/>
          else
            return <Card value={card.v} face={card.f} key={card.f} hidden={false}/>
        })}
      </div>
    );
  }
}

class Card extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    //usage of IF/ELSE in JSX
    /*(this.props.hidden) ? 'url(svg-cards/hidden.png' 
    :*/
    const cardImage = this.props.value + '_of_' + this.props.face;
    var url = require('./svg-cards/' + cardImage + '.svg');
    var urlHidden = require('./svg-cards/hidden.png');
    var cardBackground =
      (this.props.hidden) 
      ? 'url(' + urlHidden + ')'
      : 'url(' + url + ')';
    var card = {backgroundImage: cardBackground};
    return (
      <div className='card' style={card}/>
    )
  }
}

class Interface extends React.Component {
  render() {
    return (
      <div>
      <Result status={this.props.status}/>
        <div>
          House Hand Score: {this.props.housescore}
        </div>
      <div>
       <button onClick={this.props.deal} type="button">Deal</button>
       <button onClick={this.props.hit} type="button">Hit</button>
       <button onClick={this.props.stand} type="button">Stand</button>
       <button>Advice</button>
       <button onClick={this.props.restart} type="button">Restart</button>
      </div>
        <div>
          Player Hand Score: {this.props.playerscore}
        </div>
      </div>
    );
  }
}



export default App;
