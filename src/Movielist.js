import React from "react";
import Moviecard from "./MovieCard";

class Movielist extends React.Component {
    
        
  constructor(){ 
    super();
    //here we are setting state object values in constructor function because constructor is called when 
    // object of Moviecard created.and that object is created when Moviecard is called in app.js
    this.state={
      movies:[
       {
        id:1,
    title:"Pathan",
        plot:"hi this is pathan movie by srk",
        price:500,
        rating:1.3,
        stars:0,
        fav:true
     },
     {
      id:2,
      title:"dhoom",
        plot:"hi this is pathan movie by srk",
        price:500,
        rating:1.3,
        stars:0,
        fav:true
     },
     {
      id:3,
      title:"me hoo na",
        plot:"hi this is pathan movie by srk",
        price:500,
        rating:1.3,
        stars:0,
        fav:true
     }
      ]
        
    
    }}
    addstar=(movie)=>{
      const {movies} = this.state;
    const index = movies.indexOf(movie);
    
      if(movies[index].stars>=5){
          return;
      }
      movies[index].stars+=1;
      this.setState({movies:movies})
  }

  removestar=(movie)=>{
    const {movies} = this.state;
    const index = movies.indexOf(movie);
    
      if(movies[index].stars==0){
          return;
      }
      movies[index].stars-=1;
      this.setState({movies:movies})
  }

  handlefav=()=>{
   this.setState({
      fav:!this.state.fav
   })
  }

    render() {
      const {movies}=this.state;
        return (
          <>
          {movies.map((movie)=><Moviecard movies={movie} 
          addstar={this.addstar}
          removestar={this.removestar}
          key={movie.id}

          />)}
          
          
          </>
           
        )
    }
}

export default Movielist;