import React from 'react';
import ReactModal from 'react-modal';
// import logo from './logo.svg';
import './App.css';

//highest component
//state of shuffled deck and then ceates a game with the deck
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      deck: [...this.shuffle(this.shuffle([
        {v:11,f:"c1"},{v:2,f:"c2"},{v:3,f:"c3"},{v:4,f:"c4"},{v:5,f:"c5"},{v:6,f:"c6"},
        {v:7,f:"c7"},{v:8,f:"c8"},{v:9,f:"c9"},{v:10,f:"c10"},{v:10,f:"c11"},{v:10,f:"c12"},{v:10,f:"c13"},
        {v:11,f:"h1"},{v:2,f:"h2"},{v:3,f:"h3"},{v:4,f:"h4"},{v:5,f:"h5"},{v:6,f:"h6"},
        {v:7,f:"h7"},{v:8,f:"h8"},{v:9,f:"h9"},{v:10,f:"h10"},{v:10,f:"h11"},{v:10,f:"h12"},{v:10,f:"h13"},
        {v:11,f:"s1"},{v:2,f:"s2"},{v:3,f:"s3"},{v:4,f:"s4"},{v:5,f:"s5"},{v:6,f:"s6"},
        {v:7,f:"s7"},{v:8,f:"s8"},{v:9,f:"s9"},{v:10,f:"s10"},{v:10,f:"s11"},{v:10,f:"s12"},{v:10,f:"s13"},
        {v:11,f:"d1"},{v:2,f:"d2"},{v:3,f:"d3"},{v:4,f:"d4"},{v:5,f:"d5"},{v:6,f:"d6"},
        {v:7,f:"d7"},{v:8,f:"d8"},{v:9,f:"d9"},{v:10,f:"d10"},{v:10,f:"d11"},{v:10,f:"d12"},{v:10,f:"d13"},
        {v:11,f:"c1"},{v:2,f:"c2"},{v:3,f:"c3"},{v:4,f:"c4"},{v:5,f:"c5"},{v:6,f:"c6"},
        {v:7,f:"c7"},{v:8,f:"c8"},{v:9,f:"c9"},{v:10,f:"c10"},{v:10,f:"c11"},{v:10,f:"c12"},{v:10,f:"c13"},
        {v:11,f:"h1"},{v:2,f:"h2"},{v:3,f:"h3"},{v:4,f:"h4"},{v:5,f:"h5"},{v:6,f:"h6"},
        {v:7,f:"h7"},{v:8,f:"h8"},{v:9,f:"h9"},{v:10,f:"h10"},{v:10,f:"h11"},{v:10,f:"h12"},{v:10,f:"h13"},
        {v:11,f:"s1"},{v:2,f:"s2"},{v:3,f:"s3"},{v:4,f:"s4"},{v:5,f:"s5"},{v:6,f:"s6"},
        {v:7,f:"s7"},{v:8,f:"s8"},{v:9,f:"s9"},{v:10,f:"s10"},{v:10,f:"s11"},{v:10,f:"s12"},{v:10,f:"s13"},
        {v:11,f:"d1"},{v:2,f:"d2"},{v:3,f:"d3"},{v:4,f:"d4"},{v:5,f:"d5"},{v:6,f:"d6"},
        {v:7,f:"d7"},{v:8,f:"d8"},{v:9,f:"d9"},{v:10,f:"d10"},{v:10,f:"d11"},{v:10,f:"d12"},{v:10,f:"d13"},
        {v:11,f:"c1"},{v:2,f:"c2"},{v:3,f:"c3"},{v:4,f:"c4"},{v:5,f:"c5"},{v:6,f:"c6"},
        {v:7,f:"c7"},{v:8,f:"c8"},{v:9,f:"c9"},{v:10,f:"c10"},{v:10,f:"c11"},{v:10,f:"c12"},{v:10,f:"c13"},
        {v:11,f:"h1"},{v:2,f:"h2"},{v:3,f:"h3"},{v:4,f:"h4"},{v:5,f:"h5"},{v:6,f:"h6"},
        {v:7,f:"h7"},{v:8,f:"h8"},{v:9,f:"h9"},{v:10,f:"h10"},{v:10,f:"h11"},{v:10,f:"h12"},{v:10,f:"h13"},
        {v:11,f:"s1"},{v:2,f:"s2"},{v:3,f:"s3"},{v:4,f:"s4"},{v:5,f:"s5"},{v:6,f:"s6"},
        {v:7,f:"s7"},{v:8,f:"s8"},{v:9,f:"s9"},{v:10,f:"s10"},{v:10,f:"s11"},{v:10,f:"s12"},{v:10,f:"s13"},
        {v:11,f:"d1"},{v:2,f:"d2"},{v:3,f:"d3"},{v:4,f:"d4"},{v:5,f:"d5"},{v:6,f:"d6"},
        {v:7,f:"d7"},{v:8,f:"d8"},{v:9,f:"d9"},{v:10,f:"d10"},{v:10,f:"d11"},{v:10,f:"d12"},{v:10,f:"d13"},
        {v:11,f:"c1"},{v:2,f:"c2"},{v:3,f:"c3"},{v:4,f:"c4"},{v:5,f:"c5"},{v:6,f:"c6"},
        {v:7,f:"c7"},{v:8,f:"c8"},{v:9,f:"c9"},{v:10,f:"c10"},{v:10,f:"c11"},{v:10,f:"c12"},{v:10,f:"c13"},
        {v:11,f:"h1"},{v:2,f:"h2"},{v:3,f:"h3"},{v:4,f:"h4"},{v:5,f:"h5"},{v:6,f:"h6"},
        {v:7,f:"h7"},{v:8,f:"h8"},{v:9,f:"h9"},{v:10,f:"h10"},{v:10,f:"h11"},{v:10,f:"h12"},{v:10,f:"h13"},
        {v:11,f:"s1"},{v:2,f:"s2"},{v:3,f:"s3"},{v:4,f:"s4"},{v:5,f:"s5"},{v:6,f:"s6"},
        {v:7,f:"s7"},{v:8,f:"s8"},{v:9,f:"s9"},{v:10,f:"s10"},{v:10,f:"s11"},{v:10,f:"s12"},{v:10,f:"s13"},
        {v:11,f:"d1"},{v:2,f:"d2"},{v:3,f:"d3"},{v:4,f:"d4"},{v:5,f:"d5"},{v:6,f:"d6"},
        {v:7,f:"d7"},{v:8,f:"d8"},{v:9,f:"d9"},{v:10,f:"d10"},{v:10,f:"d11"},{v:10,f:"d12"},{v:10,f:"d13"},
        {v:11,f:"c1"},{v:2,f:"c2"},{v:3,f:"c3"},{v:4,f:"c4"},{v:5,f:"c5"},{v:6,f:"c6"},
        {v:7,f:"c7"},{v:8,f:"c8"},{v:9,f:"c9"},{v:10,f:"c10"},{v:10,f:"c11"},{v:10,f:"c12"},{v:10,f:"c13"},
        {v:11,f:"h1"},{v:2,f:"h2"},{v:3,f:"h3"},{v:4,f:"h4"},{v:5,f:"h5"},{v:6,f:"h6"},
        {v:7,f:"h7"},{v:8,f:"h8"},{v:9,f:"h9"},{v:10,f:"h10"},{v:10,f:"h11"},{v:10,f:"h12"},{v:10,f:"h13"},
        {v:11,f:"s1"},{v:2,f:"s2"},{v:3,f:"s3"},{v:4,f:"s4"},{v:5,f:"s5"},{v:6,f:"s6"},
        {v:7,f:"s7"},{v:8,f:"s8"},{v:9,f:"s9"},{v:10,f:"s10"},{v:10,f:"s11"},{v:10,f:"s12"},{v:10,f:"s13"},
        {v:11,f:"d1"},{v:2,f:"d2"},{v:3,f:"d3"},{v:4,f:"d4"},{v:5,f:"d5"},{v:6,f:"d6"},
        {v:7,f:"d7"},{v:8,f:"d8"},{v:9,f:"d9"},{v:10,f:"d10"},{v:10,f:"d11"},{v:10,f:"d12"},{v:10,f:"d13"},
        {v:11,f:"c1"},{v:2,f:"c2"},{v:3,f:"c3"},{v:4,f:"c4"},{v:5,f:"c5"},{v:6,f:"c6"},
        {v:7,f:"c7"},{v:8,f:"c8"},{v:9,f:"c9"},{v:10,f:"c10"},{v:10,f:"c11"},{v:10,f:"c12"},{v:10,f:"c13"},
        {v:11,f:"h1"},{v:2,f:"h2"},{v:3,f:"h3"},{v:4,f:"h4"},{v:5,f:"h5"},{v:6,f:"h6"},
        {v:7,f:"h7"},{v:8,f:"h8"},{v:9,f:"h9"},{v:10,f:"h10"},{v:10,f:"h11"},{v:10,f:"h12"},{v:10,f:"h13"},
        {v:11,f:"s1"},{v:2,f:"s2"},{v:3,f:"s3"},{v:4,f:"s4"},{v:5,f:"s5"},{v:6,f:"s6"},
        {v:7,f:"s7"},{v:8,f:"s8"},{v:9,f:"s9"},{v:10,f:"s10"},{v:10,f:"s11"},{v:10,f:"s12"},{v:10,f:"s13"},
        {v:11,f:"d1"},{v:2,f:"d2"},{v:3,f:"d3"},{v:4,f:"d4"},{v:5,f:"d5"},{v:6,f:"d6"},
        {v:7,f:"d7"},{v:8,f:"d8"},{v:9,f:"d9"},{v:10,f:"d10"},{v:10,f:"d11"},{v:10,f:"d12"},{v:10,f:"d13"},
        {v:11,f:"c1"},{v:2,f:"c2"},{v:3,f:"c3"},{v:4,f:"c4"},{v:5,f:"c5"},{v:6,f:"c6"},
        {v:7,f:"c7"},{v:8,f:"c8"},{v:9,f:"c9"},{v:10,f:"c10"},{v:10,f:"c11"},{v:10,f:"c12"},{v:10,f:"c13"},
        {v:11,f:"h1"},{v:2,f:"h2"},{v:3,f:"h3"},{v:4,f:"h4"},{v:5,f:"h5"},{v:6,f:"h6"},
        {v:7,f:"h7"},{v:8,f:"h8"},{v:9,f:"h9"},{v:10,f:"h10"},{v:10,f:"h11"},{v:10,f:"h12"},{v:10,f:"h13"},
        {v:11,f:"s1"},{v:2,f:"s2"},{v:3,f:"s3"},{v:4,f:"s4"},{v:5,f:"s5"},{v:6,f:"s6"},
        {v:7,f:"s7"},{v:8,f:"s8"},{v:9,f:"s9"},{v:10,f:"s10"},{v:10,f:"s11"},{v:10,f:"s12"},{v:10,f:"s13"},
        {v:11,f:"d1"},{v:2,f:"d2"},{v:3,f:"d3"},{v:4,f:"d4"},{v:5,f:"d5"},{v:6,f:"d6"},
        {v:7,f:"d7"},{v:8,f:"d8"},{v:9,f:"d9"},{v:10,f:"d10"},{v:10,f:"d11"},{v:10,f:"d12"},{v:10,f:"d13"},
        {v:11,f:"c1"},{v:2,f:"c2"},{v:3,f:"c3"},{v:4,f:"c4"},{v:5,f:"c5"},{v:6,f:"c6"},
        {v:7,f:"c7"},{v:8,f:"c8"},{v:9,f:"c9"},{v:10,f:"c10"},{v:10,f:"c11"},{v:10,f:"c12"},{v:10,f:"c13"},
        {v:11,f:"h1"},{v:2,f:"h2"},{v:3,f:"h3"},{v:4,f:"h4"},{v:5,f:"h5"},{v:6,f:"h6"},
        {v:7,f:"h7"},{v:8,f:"h8"},{v:9,f:"h9"},{v:10,f:"h10"},{v:10,f:"h11"},{v:10,f:"h12"},{v:10,f:"h13"},
        {v:11,f:"s1"},{v:2,f:"s2"},{v:3,f:"s3"},{v:4,f:"s4"},{v:5,f:"s5"},{v:6,f:"s6"},
        {v:7,f:"s7"},{v:8,f:"s8"},{v:9,f:"s9"},{v:10,f:"s10"},{v:10,f:"s11"},{v:10,f:"s12"},{v:10,f:"s13"},
        {v:11,f:"d1"},{v:2,f:"d2"},{v:3,f:"d3"},{v:4,f:"d4"},{v:5,f:"d5"},{v:6,f:"d6"},
        {v:7,f:"d7"},{v:8,f:"d8"},{v:9,f:"d9"},{v:10,f:"d10"},{v:10,f:"d11"},{v:10,f:"d12"},{v:10,f:"d13"},
        ]))],
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
      <Game deck={(this.state.deck)}/>
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
      tally: 0,
      playerBank: 100,
      lockedIn: false,
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  //handle modals
  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }
 
  
  //create functions to handle certain events (dealing,hit,stand,restart,advice)

  handleScore = (hand) => {
    var score = 0;
    var hasAce = false;

    for(var i = 0; i < hand.length; i++){
      score += hand[i].v;
      if (hand[i].f === "c1" || hand[i].f === "d1" || hand[i].f === "h1" || hand[i].f === "s1"){
        hasAce = true;
      }
    }
    
    //need logic to decide if ace is 1 or 11
    if (score > 21 && hasAce){
      score -= 11;
      score += 1;
    }
    
    return score;
  }

  handleHouseScore = (hand) => {
    var score = 0;
    var hasAce = false;
    
    if (this.state.status === "Let's get started!"){
      return score; 
    }

    for(var i = 0; i < hand.length; i++){
      score += hand[i].v;
      if (hand[i].f === "c1" || hand[i].f === "d1" || hand[i].f === "h1" || hand[i].f === "s1"){
        hasAce = true;
      }
      
    }

    //need logic to decide if ace is 1 or 11
    if (score > 21 && hasAce){
      score -= 11;
      score += 1;
    }

    if (this.state.status === "Done" || this.state.status === "Bust" || this.state.status === "House Busted" 
    || this.state.status === "Push" || this.state.status === "Lose" || this.state.status === "Win" ){
      return score; 
    }
    else{
      score -= hand[1].v;
    }

    
    
    return score;
  }

  //return true if busts, else its false
  handleBust = (hand) => {
    if (this.handleScore(hand) > 21){
      return true;
    }
    else{
      return false;
    }
  }

  //this function signature is special bc it saves the "this" scope.
  handleDeal = () => {
    const newDeck = [...this.state.deck];
    const newPlayerHand = [...this.state.playerHand];
    const newHouseHand = [...this.state.houseHand];
    var bet = this.state.bet;
    var tally = this.state.tally;
    var playerBank = this.state.playerBank;
    var newStatus = "Playing..."

    //deal
    newPlayerHand.push(newDeck.pop());
    newHouseHand.push(newDeck.pop());
    newPlayerHand.push(newDeck.pop());
    //need to push a card and hide it in dealerHand bc 2nd card is hidden. 
    newHouseHand.push(newDeck.pop());

    //if has 21 on first 2 cards... it is BLACKJACK, and
    // since it's AC rules with 8 decks, player wins 6:5 (1.2 * bet)
    if (this.handleScore(newPlayerHand) === 21 && newPlayerHand.length === 2){
      newStatus = "Blackjack"
      bet *= 1.2;
      tally++;
      playerBank += bet;

    }
    //make updates
    this.setState({
      playerHand : newPlayerHand,
      houseHand: newHouseHand,
      deck: newDeck,
      status: newStatus,
      bet: bet,
      tally: tally,
      playerBank: playerBank,
    });
  }

  
  handleHit = () => {
    const newDeck = [...this.state.deck];
    const playerHand = [...this.state.playerHand];
    var status = this.state.status;
    var tally = this.state.tally;
    var playerBank = this.state.playerBank;
    
    //deal card
    playerHand.push(newDeck.pop());

    //five card charlie (the small chance it actually happens)
    
    if (this.handleScore(playerHand) > 21){
      status = "Bust";
      tally--;
      playerBank -= this.state.bet;
      
    }
    //houseHand does not change so don't have to setState.
    this.setState({
      playerHand: playerHand,
      deck: newDeck,
      status: status,
      tally: tally,
      playerBank: playerBank
    })
  }
  
  handleStand = () => {
    //change status so something like done to notify when player is done so house can show card and play.
    this.setState({
      //Done indicating, done with the player move. 
      status: "Done"
    })
  }

  // handleSplit = () => {
    
  // }
 

  //double down
  handleDoubleDown = () => {
    const playerHand = [...this.state.playerHand];
    var status = this.state.status;
    var bet = this.state.bet;
    
    // multiply bet by two since doubling down
    bet *= 2;

    //need find way to disable unless on first 2 cards dealt.

    //double down in AC, ony allows one hit and you must stand then.
    //also changes status to bust if it busts..
    this.handleHit(playerHand);

    if (this.handleScore(playerHand) <= 21){
      this.handleStand();
    }

    this.setState({
      playerHand: playerHand,
      status: status,
      bet: bet
    });

  }


  handleRestart = () => {
    const newDeck = [...this.props.deck];
    const playerHand = [];
    const houseHand = [];
  
    //shuffle function
    for (let i = newDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    
    } 

    //set state to initial settings to play a new game
    this.setState({
      deck: newDeck,
      playerHand: playerHand,
      houseHand: houseHand,
      status: "Let's get started!",
      lockedIn: false
    })

  
    
 }

 handleHouseTurn = () => {
  const newDeck = [...this.state.deck];
  const houseHand = [...this.state.houseHand];
  const playerHand = [...this.state.playerHand];
  var tally = this.state.tally;
  var status = this.state.status;
  var bank = parseInt(this.state.playerBank,10);

  while (this.handleScore(houseHand) < 17){
    houseHand.push(newDeck.pop());
  }

  //find out who won and in what way (busted, better hand, push, etc.)
  if (this.handleBust(houseHand)){
    status= "House Busted";
    tally++;
    //10 added for radix
    bank += parseInt(this.state.bet,10);

  }
  else if(this.handleScore(houseHand) === this.handleScore(playerHand)) {
    status = "Push";
  
  }
  else if(this.handleScore(houseHand) > this.handleScore(playerHand)){
    status = "Lose";
    tally--;
    bank -= parseInt(this.state.bet,10);
  
  }
  else if(this.state.status === "Bust"){
    status = "Bust"
    tally--;
    bank -= parseInt(this.state.bet,10);
  }
  else{
    status = "Win";
    tally++;
    bank += parseInt(this.state.bet,10);
  }


  this.setState({
    deck: newDeck,
    houseHand: houseHand,
    status: status,
    tally: tally,
    playerBank: bank
  })
}

 handleBet = (event) => {
   this.setState({
     bet: event.target.value
   });
 }

 handleSubmit = (event) => {
   alert("$" + this.state.bet + " bet is locked in.");
   event.preventDefault();

   this.closeModal();

   this.setState({
    lockedIn: true
  });
 }

  render(){
  
    if (this.state.status === "Done")
      this.handleHouseTurn();
    
    return (
      //render a status here
      <div>
        <div>
          {(this.state.status === "Done" || this.state.status === "Bust" || this.state.status === "House Busted" 
          || this.state.status === "Push" || this.state.status === "Lose" || this.state.status === "Win" )
           ?  <Hand hand={this.state.houseHand} dealer={false} status={this.state.status}/>
           :  <Hand hand={this.state.houseHand} dealer={true} status={this.state.status}/>
          }
         {/* <Hand hand={this.state.houseHand} dealer={true} status={this.state.status}/> */}
          <Interface
          housescore = {this.handleHouseScore(this.state.houseHand)}
          deal={this.handleDeal}
          hit={this.handleHit}
          stand={this.handleStand}
          bet={this.state.bet}
          lockedin={this.state.lockedIn}
          doubledown={this.handleDoubleDown}
          restart={this.handleRestart}
          status={this.state.status}
          playerscore = {this.handleScore(this.state.playerHand)}
          tally = {this.state.tally}
          playerBank = {this.state.playerBank}
          />
          <div>
            <button disabled={this.state.lockedIn} onClick={this.openModal}>Make Bet</button>
            <ReactModal 
              isOpen={this.state.modalIsOpen}
              contentLabel="Example Modal"
              style={
                {
                  content: {
                    position: 'absolute',
                    width: "30%",
                    height: "30%",
                    left: 600,
                    top: 150
                  }
                }
              }
            >
              <h2>Insert a Bet!</h2>
              <div>
                <form>
                  <label>
                    Player Bet: 
                    <input type="text" value={this.state.bet} onChange= {this.handleBet}/>
                    <button onClick={this.handleSubmit}>Bet</button>
                 </label>
               </form> 
               
              </div>
              
            </ReactModal>
          </div>
          
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
      case "Blackjack":
         return(<div className="alert alert-success" role="alert">BLACKJACK! You win 6:5 your bet (1.2 times your bet)!</div>);
      case "Win":
         return(<div className="alert alert-success" role="alert">You win! You earned my money$$ :(!</div>);    
      case "House Busted":
         return(<div className="alert alert-success" role="alert">House BUSTED! You win! You earned my money$$ :(!</div>);
      case "Bust":
         alert("You busted! Let's see what the house had...")
         return(<div className="alert alert-danger" role="alert">You BUSTED! You lose! Give me your money$$ :)!</div>);
      case "Push":
         return(<div className="alert alert-info" role ="alert">The hands are equal. Push! Hold on to your money for now... ;)!</div>);
      case "Lose":
         return(<div className="alert alert-danger" role="alert">House had a better hand.You lose! Give me your money$$ :)!</div>);
      case "Done":
         alert("Let's see what the House has.");
         return<div className="alert alert-info" role="alert">House's turn</div>  
      default:
        return(<div className="alert alert-info" role="alert">{this.props.status}</div>);
        
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
          if (this.props.dealer && i === 1 && this.props.status !== 'Done' && this.props.status !== 'House went.' && this.props.status !== "Win" && this.props.status !== "Lose" && this.props.status !== "Push" ) 
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
        <h3>
          House Hand Score: {this.props.housescore}
        </h3>
      <div>
       <button disabled={!this.props.lockedin} onClick={this.props.deal} type="button">Deal</button>
       <button disabled={!this.props.lockedin} onClick={this.props.hit} type="button">Hit</button>
       <button disabled={!this.props.lockedin} onClick={this.props.stand} type="button">Stand</button>
       <button disabled={true} onClick={this.props.doubleDown} type="button">Double Down</button>
       <button disabled={true} type="button">Split</button>
       <button>Advice</button>
       <button onClick={this.props.restart} type="button">Restart</button>
       
      </div>
      <div>
        <Result status={this.props.status}/>
      </div>
        <h3>
          Player Hand Score: {this.props.playerscore}
        </h3>
        <div>
          Player Wins: {this.props.tally}
        </div>
        <div>
          Player Bank: ${this.props.playerBank}
        </div>
        <div>
          Player Bet Locked In: ${this.props.bet}
        </div>
       
      </div>
    );
  }
}



export default App;
