import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  background: rgb(241, 241, 241);
  -webkit-box-shadow: 3px 3px 4px -1px rgba(0, 0, 0, 0);
  -moz-box-shadow: 3px 3px 4px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 4px -1px rgba(0, 0, 0, 0.75);
`;

const Title = styled.div`
  font-size: 26px;
  margin-bottom: 10px;
  text-align: center;
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
