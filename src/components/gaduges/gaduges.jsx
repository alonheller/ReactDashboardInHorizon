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
const Wrapper = styled.div`
  color: #757575;
`;
const Label = styled.div`
  color: #757575;
  text-align: center;
  margin: 10px;
  font-family: 'Roboto';
  font-size: 20px;
`;

@inject('Store')
@observer
class Gaduges extends Component {
  constructor() {
    super();
    // const data = this.generateData();
    this.state = {
      selected: false,
      numbers: {
        cores: {
          percent: 70,
          label: '70/',
        },
        storage: {
          percent: 60,
          label: '/',
        },
        memory: {
          percent: 30,
          label: '/',
        },
      },
      width1: 150,
      width2: 150,
      width3: 150,
    };
  }

  generateData = () => {
    const min = 1;
    const max1 = 100;
    const max2 = 160;
    const max3 = 220;
    const rand1 = Math.floor(
      ((min + Math.random() * (max1 - min)) / max1) * 100,
    );
    const rand2 = Math.floor(
      ((min + Math.random() * (max2 - min)) / max2) * 100,
    );
    const rand3 = Math.floor(
      ((min + Math.random() * (max2 - min)) / max2) * 100,
    );
    const data = {
      cores: {
        percent: rand1,
        label: '' + rand1 + '/' + max1,
      },
      storage: {
        percent: rand2,
        label: '' + rand2 + '/' + max2,
      },
      memory: {
        percent: rand3,
        label: '' + rand3 + '/' + max3,
      },
    };
    return data;
  };

  static getDerivedStateFromProps(props, state) {
    console.log('gggg');
    console.log(props.Store.selectedAlarm, state.selected);
    console.log(props.Store.selectedAlarm !== state.selected);
    if (props.Store.selectedAlarm !== state.selected) {
      console.log('inside if');
      const min = 1;
      const max1 = 100;
      const max2 = 160;
      const max3 = 220;
      const rand1 = Math.floor(
        ((min + Math.random() * (max1 - min)) / max1) * 100,
      );
      const rand2 = Math.floor(
        ((min + Math.random() * (max2 - min)) / max2) * 100,
      );
      const rand3 = Math.floor(
        ((min + Math.random() * (max2 - min)) / max2) * 100,
      );
      const data = {
        cores: {
          percent: rand1,
          label: '' + rand1 + '/' + max1,
        },
        storage: {
          percent: rand2,
          label: '' + rand2 + '/' + max2,
        },
        memory: {
          percent: rand3,
          label: '' + rand3 + '/' + max3,
        },
      };
      return { selected: props.Store.selectedAlarm, numbers: data };
    }
    return { selected: props.Store.selectedAlarm };
  }

  handleMouseEnter = num => {
    switch (num) {
      case 'first':
        this.setState({ width1: 200 });
        break;
      case 'sec':
        this.setState({ width2: 200 });
        break;
      case 'third':
        this.setState({ width3: 200 });
        break;
      default:
        break;
    }
  };

  handleMouseLeave = () => {
    console.log('OUT');
    this.setState({ width1: 150, width2: 150, width3: 150 });
  };

  render() {
    console.log(this.props.Store.selectedAlarm);
    const cores = this.state.numbers.cores.percent;
    const storage = this.state.numbers.storage.percent;
    const memory = this.state.numbers.memory.percent;
    return (
      <Widget title="Status">
        <Container>
          <Wrapper
            id="one"
            onMouseEnter={() => this.handleMouseEnter('first')}
            onMouseLeave={this.handleMouseLeave}
          >
            <Progress
              strokeWidth={7}
              width={this.state.width1}
              type="circle"
              strokeColor={cores <= 60 ? '#87d068' : '#eb3737'}
              percent={cores}
              strokeLinecap="square"
            />
            <Label>CORES</Label>
          </Wrapper>
          <Wrapper
            onMouseEnter={() => this.handleMouseEnter('sec')}
            onMouseLeave={this.handleMouseLeave}
          >
            <Progress
              strokeWidth={7}
              width={this.state.width2}
              type="circle"
              percent={storage}
              strokeColor={storage <= 60 ? '#87d068' : '#eb3737'}
              strokeLinecap="square"
            />
            <Label>STORAGE</Label>
          </Wrapper>
          <Wrapper
            onMouseEnter={() => this.handleMouseEnter('third')}
            onMouseLeave={this.handleMouseLeave}
          >
            <Progress
              strokeWidth={7}
              strokeColor={memory >= 60 ? '#eb3737' : ''}
              width={this.state.width3}
              type="circle"
              percent={memory}
              strokeLinecap="square"
            />
            <Label>MEMORY</Label>
          </Wrapper>
        </Container>
      </Widget>
    );
  }
}

export default Gaduges;
