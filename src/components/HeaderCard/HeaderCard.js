import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderCardWrapper = styled.div`
  height: 90px;
  border: solid 1px #dbdbdb;
  background-color: ${props => props.color};
  padding-right: 2%;
  padding-top: 1%;
  padding-left: 2%;
  float: left;
  width: 22%;
  margin-left: 2%;
`;

const HeaderCardData = styled.div`
  float: left;
`;

const HeaderCardTitle = styled.div`
  width: 100px;
  height: 21px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
`;

const HeaderCardIcon = styled.span`
  width: 30px;
  height: 30px;
  float: right;
  margin-top: 17px;
`;

const HeadeCardNum = styled.div`
  width: 25px;
  height: 33.3px;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
`;
const Icon = styled.i`
  color: white;
`;

class HeaderCard extends Component {
  render() {
    return (
      <HeaderCardWrapper color={this.props.color}>
        <HeaderCardData>
          <HeadeCardNum>{this.props.number}</HeadeCardNum>
          <HeaderCardTitle>{this.props.title}</HeaderCardTitle>
        </HeaderCardData>
        <HeaderCardIcon>
          <Icon className={this.props.icon} />
        </HeaderCardIcon>
      </HeaderCardWrapper>
    );
  }
}

export default HeaderCard;
