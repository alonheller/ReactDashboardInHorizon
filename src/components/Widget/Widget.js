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
  background: #ecebeb;
  text-align: left;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 12px;
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
