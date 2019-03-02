import React, { PropTypes, Component } from 'react';
import CarouselContainer from './CarouselContainer'
import Wrapper from './Wrapper'
import CarouselSlot from './CarouselSlot'
class Carousel extends Component {
    constructor(props){
        super(props)
        this.state = {
          position: 0
        }
      }
      getOrder(itemIndex) {
        const { position } = this.state
        const { children } = this.props
        const numItems = children.length || 1
        if (itemIndex - position < 0) {
          return numItems - Math.abs(itemIndex - position)
        }
        return itemIndex - position
      }
      nextSlide = () => {
        const { position } = this.state
        const { children } = this.props
        const numItems = children.length || 1
        this.setState({
          position: position === numItems - 1 ? 0 : position + 1
        })
      }
      doSliding = (position) => {
        this.setState({
          sliding: true,
          position
        })
        setTimeout(() => {
         this.setState({
            sliding: false
          })
        }, 50)
      }
      
  render() {
    const { title, children } = this.props
    const CarouselSlot = styled.div`
        flex: 1 0 100%;
        flex-basis: 80%;
        margin-right: 20px;
        order: ${(props) => props.order};
        `
  
    return (
      <div>
        <h2>{ title }</h2>
        <Wrapper>
          <CarouselContainer>
            { children.map((child, index) => (
              <CarouselSlot
              key={ index }
              order={ this.getOrder(index) }
            >
              {child}
            </CarouselSlot>
            )) }
          </CarouselContainer>
        </Wrapper>
        <button onClick={ () => this.nextSlide() }>Next</button>
      </div>
    )
  }
}
Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};
export default Carousel;