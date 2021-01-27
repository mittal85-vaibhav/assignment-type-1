import React, { Component } from 'react';
import Carousel from 'src/components/Carousel/Carousel';

class ApartmentType extends Component {
  render() {
    return (
      <>
        <div className="flex-container">
          <Carousel aptTypes={this.props.aptTypes} />
        </div>
      </>
    );
  }
}

export default ApartmentType;
