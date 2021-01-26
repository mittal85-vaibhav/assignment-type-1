import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookApartment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <select className="form-select" name="cars" id="cars">
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

export default connect(mapStateToProps)(BookApartment);
