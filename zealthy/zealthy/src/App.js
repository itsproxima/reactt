import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import ArticleContent from './components/ArticleContent';
//import Parent from './components/Parent'
//import ArticleCard from './components/ArticleCard';
//import CardExampleCardProps from './components/CardExampleCardProps';
import MyHeader from './layout/MyHeader';
//import MyFooter from './layout/MyFooter';
//import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
//import '../semantic/dist/semantic.min.css'
//import Post from './redux/Post'
//import PostForm from './redux/PostForm'


class App extends Component {
  
  render() {
    return (
      <div className="App" >
       
       {/*<ArticleContent></ArticleContent>
      <CardExampleCardProps/>
       <ArticleCard/>
       <MyFooter/>
       <Parent/>
       <Post/>
      <PostForm/>
       */}
      <MyHeader onScroll={() => document.write("hello")}/>}
      
      
      
       
      </div>
    );
  }
}

export default App;
