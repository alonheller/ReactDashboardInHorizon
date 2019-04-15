import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderCardWrapper = styled.div`
  height: 90px;
  border: solid 1px #aeaeae;
  background-color: ${props => props.color};
  padding-right: 2%;
  padding-top: 1%;
  padding-left: 2%;
  display: flex;
  width: 22%;
  margin-left: 2%;
  box-shadow: 5px 5px 5px #aeaeae;
  &:hover {
    box-shadow: 1px 1px 8px 3px #aeaeae;
  }
`;

const HeaderCardData = styled.div`
  display: block;
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
  height: 30px;
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
