import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  background: #f9f9f9;
  border: solid 1px #f2f2f2;
  -webkit-box-shadow: 3px 3px 4px -1px rgba(0, 0, 0, 0);
  -moz-box-shadow: 3px 3px 4px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 5px 5px #aeaeae;
  &:hover {
    box-shadow: 1px 1px 8px 3px #aeaeae;
  }
`;

const Title = styled.div`
  font-size: 26px;
  margin-bottom: 10px;
  text-align: center;
`;

export class Widget extends Component {
  render() {
    return (
      <Container id="container">
        <Title id="title">RealTime Monitor</Title>
        {this.props.children}
      </Container>
    );
  }
}
