import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SingleBedOutlined from '@material-ui/icons/SingleBedOutlined';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import RoomIcon from '@material-ui/icons/RoomOutlined';
import httpsWithQuality from '../../utils/httpsWithQuality';

const Div = styled.div`
  background-color: rgb(246, 248, 248);
  img {
    object-fit: cover;
    width: 100%;
  }

  div {
    padding: 5px;
  }

  .sliderdiv {
    background-color: white;
  }
`;

export default class Carousel extends Component {
  state = {
    show: false,
  };

  selectType = (appType) => {
    console.log(`Select type of apartment is ${appType.type}`);
    this.props.selectApartment(appType);
  };

  render() {
    const settings = {
      dots: false,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Div className="property-carousel">
          <Slider {...settings} className="relative">
            {this.props.aptTypes.length &&
              this.props.aptTypes.map((appType, id) => (
                <div
                  key={'slide#' + id}
                  onClick={() => this.selectType(appType)}
                  className="sliderdiv"
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
                    <div className="col-2">
                      <SingleBedOutlined />: {appType.bedRooms}
                    </div>
                    <div className="col-2">
                      <BathtubOutlinedIcon /> {appType.restRooms}
                    </div>
                  </div>
                  <div className="row  px-2">
                    <div className="col-12">
                      <RoomIcon /> Shibuya
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
