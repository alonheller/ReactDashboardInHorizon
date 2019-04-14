import React, { Component } from 'react';
import { Progress } from 'antd';
import styled from 'styled-components';
import { Widget } from '../Widget/Widget';
import 'antd/dist/antd.css';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

class Gaduges extends Component {
  render() {
    return (
      <Widget>
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
      </Widget>
    );
  }
}

export default Gaduges;
