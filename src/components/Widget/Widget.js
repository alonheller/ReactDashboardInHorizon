import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  background: #ffffff;
  border: solid 1px #4a90e2;
  border-radius: 3px;
  -webkit-box-shadow: 3px 3px 4px -1px rgba(0, 0, 0, 0);
  -moz-box-shadow: 3px 3px 4px -1px rgba(0, 0, 0, 0.75);
  &:hover {
    box-shadow: 1px 1px 8px 3px #aeaeae;
  }
`;

const Title = styled.div`
  background: #4a90e2;
  text-align: left;
  font-size: 18px;
  border-radius: 3px;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  padding: 10px;
  margin-bottom: 20px;
`;

export class Widget extends Component {
  render() {
    const { title } = this.props;
    return (
      <Container id="container">
        <Title id="title">{title}</Title>
        {this.props.children}
      </Container>
    );
  }
}
