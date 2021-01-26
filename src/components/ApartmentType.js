import React, { Component } from 'react';
import Carousel from 'src/components/Carousel/Carousel';
import { connect } from 'react-redux';
import { selectAptType } from 'src/store/actions/apartmentActions';

class ApartmentType extends Component {
  render() {
    return (
      <>
        <div className="flex-container">
          <Carousel
            aptTypes={this.props.aptTypes}
            selectApartment={this.props.setselectedAptTypeRedux}
          />
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setselectedAptTypeRedux: (selectedAptType) => {
      dispatch(selectAptType({ selectedAptType }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentType);
