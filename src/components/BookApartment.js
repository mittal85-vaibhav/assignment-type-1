import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  selectAptType,
  selectSlider,
} from 'src/store/actions/apartmentActions';
class BookApartment extends Component {
  constructor(props) {
    super(props);
  }

  apartmentTypeSelected = (event) => {
    if (!this.props.aptTypes.length) return;
    let selectedApt = this.props.aptTypes.find(
      (item) => item.type === event.target.value,
    );
    let selectedAptIndex = this.props.aptTypes.indexOf(selectedApt);
    this.props.setselectedAptTypeRedux(selectedApt);
    this.props.selectSliderRedux(selectedAptIndex);
  };
  render() {
    return (
      <>
        <select
          className="form-select"
          name="cars"
          id="cars"
          onChange={this.apartmentTypeSelected}
        >
          {this.props.aptTypes.length &&
            this.props.aptTypes.map((aptType) => (
              <option
                value={aptType.type}
                selected={aptType.type === this.props.selectedAptType.type}
              >
                {aptType.type} &nbsp; {aptType.price}
              </option>
            ))}
        </select>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedAptType: state.apartment.selectedAptType,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setselectedAptTypeRedux: (selectedAptType) => {
      dispatch(selectAptType({ selectedAptType }));
    },
    selectSliderRedux: (selectedSlider) => {
      dispatch(selectSlider({ selectedSlider }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookApartment);
