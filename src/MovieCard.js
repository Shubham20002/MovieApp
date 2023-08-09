import React from "react";
import './Moviecard.css';
class Moviecard extends React.Component {
    
        
    constructor(){
        
        super();
        //here we are setting state object values in constructor function because constructor is called when 
        // object of Moviecard created.and that object is created when Moviecard is called in app.js
        this.state={
            title:"Pathan",
            plot:"hi this is pathan movie by srk",
            price:500,
            rating:1.3,
            stars:0,
            fav:true
        }
    }

    addstar=()=>{
        // console.log("this state:"+this);
        // this.setState({
        //     stars:this.state.stars +0.5
        // })
        if(this.state.stars>=5){
            return;
        }
        this.setState((prevState)=>({stars:prevState.stars+.5}))
    }
    removestar=()=>{
        if(this.state.stars<=0){
            return;
        }
        this.setState((prevState)=>({stars:prevState.stars-0.5}))
    }

    handlefav=()=>{
     this.setState({
        fav:!this.state.fav
     })
    }

    render() {
        //destructure the object
        const {title,plot,price,rating,stars,fav}=this.state;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img width="100%" height="100%" src="data:image/jpeg;base64,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" alt="movie img" />
                    </div>
                    <div className="right">
                        <div className="heading">
                            <h3>{this.state.title}</h3>
                        </div>
                        <div className="plot">
                            <p>{plot}</p>
                        </div>
                        <div className="price">
                            <h5>{price}</h5>
                        </div>

                        <div className="footer">
                            <div className="rating">
                                <h4>{rating}</h4>
                            </div>
                            <div className="star">
                               <img className="stardec"
                                src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                                 alt="" onClick={this.removestar}/>

                               <img className="starimg"
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="" />
                                
                               <img className="starinc" 
                               src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="" onClick={this.addstar}/>
                               <span>{stars}</span>
                            </div>
                            <div className="btnbox">
                                {fav? <button className="unfav-button" onClick={this.handlefav}>UnFav</button>:
                                <button className="fav-button"onClick={this.handlefav}>Fav</button>}
                                <button className="buy-button">Add To Cart</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Moviecard;