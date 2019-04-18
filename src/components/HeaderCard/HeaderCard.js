import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderCardWrapper = styled.div`
  cursor: pointer;
  display: flex;
  min-width: 280px;
  padding-left: 30px;
  width: 22%;
  padding-right: 30px;
  height: 90px;
  border: solid 1px #aeaeae;
  background-color: ${props => props.color};
  &:hover {
    box-shadow: 1px 1px 8px 3px #aeaeae;
  }
`;

const HeaderCardData = styled.div`
  display: block;
  margin-top: 12px;
`;

const HeaderCardTitle = styled.div`
  width: 100px;
  height: 21px;
  font-family: 'Roboto';
  font-size: 16px;
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
  margin-right: 10px;
`;

const HeadeCardNum = styled.div`
  width: 25px;
  height: 33.3px;
  font-family: 'Roboto';
  letter-spacing: normal;
  color: white;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
`;
const Icon = styled.i`
  color: white;
`;

class HeaderCard extends Component {
  render() {
    return (
      <HeaderCardWrapper color={this.props.color}>
        <HeaderCardIcon>
          <Icon className={this.props.icon} />
        </HeaderCardIcon>
        <HeaderCardData>
          <HeadeCardNum>{this.props.number}</HeadeCardNum>
          <HeaderCardTitle>{this.props.title}</HeaderCardTitle>
        </HeaderCardData>
      </HeaderCardWrapper>
    );
  }
}

export default HeaderCard;
