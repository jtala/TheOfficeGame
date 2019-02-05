import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Directions from "./components/Directions/Directions";
import Characters from "./components/Characters/Characters";
import Office from "./character.json";
import "./App.css";


class App extends React.Component {
    state = {
        Office,
        clickedCharacter: [],
        Count: 0
      };

    // When clicked..
      imageClick = event => {
        // Store  current character.
        const currentCharacter = event.target.alt;
        // Check if already Clicked
        const characterAlreadyClicked =
          this.state.clickedCharacter.indexOf(currentCharacter) > -1;
    
    //If already clicked, reset the score and scramble the images, and display the alert.
        if (characterAlreadyClicked) {
          this.setState({
            //Scramble image logic
            Office: this.state.Office.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedCharacter: [],
            Count: 0
          });
            alert("Oops, you've already clicked that character!");
    
    //if you click on an unclicked character, scramble images, and increase count.
        } else {
          this.setState(
            {
              //Scramble image logic  
              Office: this.state.Office.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCharacter: this.state.clickedCharacter.concat(
                currentCharacter
              ),
              Count: this.state.Count + 1
            },
    //all 12 in a row logic.       
            () => {
              if (this.state.Count === 12) {
                alert("You got 12 characters without any duplicates!");
                this.setState({
                //Scramble image logic
                  Office: this.state.Office.sort(function(a, b) {
                    return 0.5 - Math.random();
                  }),
                  clickedCharacter: [],
                  Count: 0
                });
              }
            }
          );
        }
      };
    

    render(){
        return(
            <div>
                <NavBar Count={this.state.Count}/>
                <Directions/>
                    <div className ="imageBox">
                    {this.state.Office.map((character) =>{
                        return <Characters 
                        imageClick={this.imageClick}
                        id={character.id}
                        key={character.id}
                        image={character.image}
                        />
                    })}
                    </div>
        
               
            </div>
        );
    };
}

export default App;