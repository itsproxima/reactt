import React, { Component } from 'react';
import {Content,Header,Layout,Drawer,Navigation,} from 'react-mdl'
//import { CardTitle } from 'react-mdl/lib/Card';
//import CardActions from 'react-mdl/lib/Card/CardActions';
//import IconButton from 'react-mdl/lib/IconButton';
import './HeaderStyle.css';
import './xyz.css'
import ContentPage from './ContentPage';

   
 class MyHeader extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
          isClicked:false
       
         
      }
      this.scrollUpevent=this.scrollUpevent.bind(this)
    
    
    }
     
    scrollUpevent(){
       //e.preventDefault();
       this.setState({
        isClicked:true
       }) 
    }
  render() {
     console.log(this.state.isClicked)
    return ( 
        
        <div>
                {/* Simple header with fixed tabs. */}
            <div >
                <Layout fixedHeader fixedTabs>
                   
                    <Header  className={this.state.isClicked?'colapseHeader':''}>
                            <Header title={<span><span style={{ color: '#9e9edc' }}>Area / </span><strong>The Title</strong></span>}>
                                <Navigation>
                                    <a href="/">Link</a>
                                    <a href="/">Link</a>
                                    <a href="/">Link</a>
                                    <a href="/">Link</a>
                                </Navigation>
                            </Header>
 
                        {/* <HeaderRow title="Title" />
                        
                        <HeaderTabs ripple activeTab={1} onChange={(tabId) => {}}>
                            <Tab>Tab1</Tab>
                            <Tab>Tab2</Tab>
                            <Tab>Tab3</Tab>
                        </HeaderTabs>*/ }
                    </Header>
                   
                    <Drawer title="Title">
                            <Navigation>
                                <a href="/">Link</a>
                                <a href="/">Link</a>
                                <a href="/">Link</a>
                                <a href="/">Link</a>
                            </Navigation>
                        </Drawer>
                    <Content>
                        <div className="page-content">
                        
                        <ContentPage scrollHandler={() => this.scrollUpevent()}/>
                        
                         </div>


                    </Content>
                    <div style={{background:"#9e9edc", height:"50px",position: "sticky"}}>
                        <a href="/">like</a>
                        <a href="/">share</a>
                    </div>
                </Layout>
            </div>
            </div>

    );
  }
}

export default MyHeader;




