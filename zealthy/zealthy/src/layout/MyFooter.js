import React, { Component } from 'react';
import {Footer,FooterSection,FooterLinkList} from 'react-mdl'
 



class MyFooter extends Component {
  render() {
    return (
        <div>
           <Footer size="mini">
                <FooterSection type="left" logo="Title">
                    <FooterLinkList>
                        <a href="/">Like</a>
                        <a href="/">Share</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
        </div>

    );
  }
}

export default MyFooter;
