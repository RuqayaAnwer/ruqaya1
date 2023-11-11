import React, { Component } from 'react';
import '../style.css/sliderwork.css';

const images = [
 "/images/sm1.jpg","/images/sm2.jpg", "/images/sm4.jpg", "/images/fl2.jpg", "/images/photo.jpg","/images/tma1.jpg","/images/hm1.jpg"
];

class SliderWork extends Component {
  constructor() {
    super();

    this.state = {
      currentIndex: 0,
      isTransitioning: false,
      goingLeft: false,
    };
  }

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyUp);
  }

  onKeyUp = (e) => {
    if (e.keyCode) {
      if (e.keyCode === 39) {
        this.showNextSet();
      } else if (e.keyCode === 37) {
        this.showPrevSet();
      }
    }
  }

  render() {
    const { currentIndex } = this.state;

    return (
      <div className="carousel__wrapper">
        <div className="carousel__container">
          {images && images.map((img, index) => {
            const className = index === currentIndex ? 'carousel__image active' : 'carousel__image';
            return <img src={img} className={className} key={`img-${index}`} alt={`Slide ${index}`} />;
          })}
        </div>
        <div className="carousel__controls">
          <button className="carousel__button" onClick={this.showPrevSet}><i className="fa fa-arrow-left"></i></button>
          <button className="carousel__button" onClick={this.showNextSet}><i className="fa fa-arrow-right"></i></button>
        </div>
      </div>
    );
  }

  showPrevSet = () => {
    const { currentIndex } = this.state;
    this.setState({ currentIndex: (currentIndex - 1 + images.length) % images.length });
  }

  showNextSet = () => {
    const { currentIndex } = this.state;
    this.setState({ currentIndex: (currentIndex + 1) % images.length });
  }
}

export default SliderWork;
