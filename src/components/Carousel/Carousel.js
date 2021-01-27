import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SingleBedOutlined from '@material-ui/icons/SingleBedOutlined';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import RoomIcon from '@material-ui/icons/RoomOutlined';
import httpsWithQuality from '../../utils/httpsWithQuality';
import classNames from 'classnames';
import { connect } from 'react-redux';
import {
  selectAptType,
  selectSlider,
} from 'src/store/actions/apartmentActions';

const Div = styled.div`
  background-color: rgb(246, 248, 248);
  img {
    object-fit: cover;
    width: 100%;
  }

  .slick-slide {
    min-width: 300px !important ;
  }

  .sliderdiv {
    padding: 5px;
    background-color: white;
  }
  .selected-border {
    border: 1px solid red;
  }
`;

class Carousel extends Component {
  state = {
    show: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedSlider != this.props.selectedSlider)
      this.slider.slickGoTo(this.props.selectedSlider);
  }

  selectType = (appType) => {
    this.props.setselectedAptTypeRedux(appType);
    let selectedAptIndex = this.props.aptTypes.indexOf(appType);
    this.props.selectSliderRedux(selectedAptIndex);
  };

  render() {
    const settings = {
      dots: false,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      // initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 2000,
      focusOnSelect: false,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <Div className="property-carousel">
          <Slider
            {...settings}
            className="relative"
            ref={(slider) => (this.slider = slider)}
          >
            {this.props.aptTypes.length &&
              this.props.aptTypes.map((appType, id) => (
                <div
                  key={'slide#' + id}
                  onClick={() => this.selectType(appType)}
                  className={classNames({
                    sliderdiv: true,
                    'selected-border': id === this.props.selectedSlider,
                  })}
                >
                  <div className="row px-2">
                    <div className="col">
                      <img
                        src={httpsWithQuality(appType.image_url, 450)}
                        alt={appType.filename}
                        className="img-responsive"
                      />
                    </div>
                  </div>
                  <div className="row px-3">
                    <div className="col-8">{appType.type}</div>
                    <div className="col-4">
                      <b>{appType.price}</b>/night
                    </div>
                    <div className="col-4 col-lg-3">
                      <SingleBedOutlined />: {appType.bedRooms}
                    </div>
                    <div className="col-4 col-lg-3">
                      <BathtubOutlinedIcon /> {appType.restRooms}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row  px-2">
                    <div className="col-12" style={{ marginLeft: -5 }}>
                      <RoomIcon fontSize="small" /> Shibuya
                    </div>
                    <div className="col-12">
                      Max residents: {appType.maxResidents}
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </Div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedSlider: state.apartment.selectedSlider,
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

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
