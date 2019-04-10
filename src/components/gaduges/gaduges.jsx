import React, { Component } from 'react';
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2%;
  display: inline-block;
  padding-top: 10%;
`;

const Container = styled.div`
  padding: 2%;
  display: inline-block;
  padding-top: 10%;
`;
class Gaduges extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Progress width={150} type="circle" percent={75} />
        </Wrapper>
        <Wrapper>
          <Progress width={150} type="circle" percent={70} status="exception" />
        </Wrapper>
        <Wrapper>
          <Progress width={150} type="circle" percent={100} />
        </Wrapper>
      </Container>
    );
  }
}

export default Gaduges;
