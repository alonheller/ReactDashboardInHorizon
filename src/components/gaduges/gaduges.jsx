import React, { Component } from 'react';
import { Progress } from 'antd';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { Widget } from '../Widget/Widget';
import 'antd/dist/antd.css';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

@inject('Store')
@observer
class Gaduges extends Component {
  render() {
    return (
      <Widget title="Status">
        <Container>
          <Progress
            strokeWidth={7}
            width={150}
            type="circle"
            percent={this.props.Store.selectedAlarm ? 75 : 100}
            strokeLinecap="square"
          />
          <Progress
            strokeWidth={7}
            width={150}
            type="circle"
            percent={this.props.Store.selectedAlarm ? 70 : 30}
            status="exception"
            strokeLinecap="square"
          />
          <Progress
            strokeWidth={7}
            width={150}
            type="circle"
            percent={this.props.Store.selectedAlarm ? 100 : 50}
            strokeLinecap="square"
          />
        </Container>
      </Widget>
    );
  }
}

export default Gaduges;
