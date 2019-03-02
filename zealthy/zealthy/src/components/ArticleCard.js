import React ,{ Component }from 'react';
import {  Collapse,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Aticle.css';

class ArticleCard extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };
    }
  
    toggle() {
      this.setState({ collapse: !this.state.collapse });
    }  

    render(){
        return (
            <div>
              <Card className="col-md-4" style={{ width:"300px",margin:"auto"}}>
                <div><span><CardImg top width="100%" src="../assets/images/author1.png" alt="Card" /></span><span className=""></span>Author:proxima</div>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  
                  <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Read More</Button>
                        <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                            Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident.
                            </CardBody>
                        </Card>
                        </Collapse>
                </CardBody>
              </Card>
              <Card className="col-md-4" style={{ width:"300px",margin:"auto"}}>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </div>
          );

    }
}   


export default ArticleCard;