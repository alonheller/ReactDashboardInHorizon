import React, { Component } from 'react';
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

class Gaduges extends Component {
  render() {
    return (
      <Container>
        <Progress
          strokeWidth={7}
          width={150}
          type="circle"
          percent={75}
          strokeLinecap="square"
        />
        <Progress
          strokeWidth={7}
          width={150}
          type="circle"
          percent={70}
          status="exception"
          strokeLinecap="square"
        />
        <Progress
          strokeWidth={7}
          width={150}
          type="circle"
          percent={100}
          strokeLinecap="square"
        />
      </Container>
    );
  }
}

export default Gaduges;
