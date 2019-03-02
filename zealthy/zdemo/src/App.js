import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//import {LandingPage} from './materialUi/LandingPage'
//import RecipeReviewCard from './materialUi/RecipeReviewCard'
//import GuttersGrid from './materialUi/GuttersGrid'
//import LabelBottomNavigation from './materialUi/LabelBottomNavigation'
//import {ArticleCard} from './materialUi/ArticleCard'
//import {ButtonEx}  from './materialUi/ButtonEx'
//import {ArticleCard2} from './materialUi/ArticleCard2'
//import {ArticleCard} from './materialUi/ArticleCard'
//import {CarousalPage} from './components/CarouselPage'
//import MySlider from './newstyles/MySlider'
//import ReactSlider from './newstyles/ReactSlider'
//import ReactSlider from './slider/ReactSlider'
//import EventTest2 from './EventTests/EventTest2'
import ArticleCard from './EventTests/ArticleCard'
import Counter from './EventTests/utils/Counter'



class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <RecipeReviewCard/>
          <LandingPage/>
       
       <GuttersGrid/>
       <LabelBottomNavigation/>
       <EventTest2/>
       <ReactSlider/> 
       <RecipeReviewCard/>

      */} 
      
      <ArticleCard/>
      <Counter/>
      
    
     
      </div>
    );
  }
}

export default App;
