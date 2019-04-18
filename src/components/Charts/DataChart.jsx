import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Widget } from '../Widget/Widget';
import './datachart.css';

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 45%;
  min-width: 300px;
`;
const Button = styled.button`
  border-radius: 12px;
  background-color: #f2f2f2;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: normal;
  border: none;
  text-align: center;
`;
const Icon = styled.i`
  margin: 5px;
`;

@inject('Store')
@observer
class DataChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Bar Chart',
    };
  }

  render() {
    const data1 = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 150, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          fill: false,
          borderColor: 'transparent',
          label: 'vitrage statistics',
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
    const data2 = {
      labels: ['A', 'B', 'C', 'D', 'E', 'F'],
      datasets: [
        {
          data: [700, 600, 500, 450, 200, 150],
          backgroundColor: [
            '#EC407A',
            '#AB47BC',
            '#7E57C2',
            '#66BB6A',
            '#FFCA28',
            '#26A69A',
          ],
          fill: false,
          borderColor: 'transparent',
          label: 'vitrage statistics',
        },
      ],
    };
    const data = this.props.Store.selectedAlarm ? data1 : data2;
    return (
      <Widget title="Statistics">
        <ButtonGroup>
          <Button
            className={this.state.activeItem === 'Bar Chart' ? 'bordered' : ''}
            onClick={() => this.handleClick('Bar Chart')}
          >
            <span>
              <Icon className="fas fa-chart-bar" />
            </span>
            Bar Chart
          </Button>
          <Button
            className={this.state.activeItem === 'Pie Chart' ? 'bordered' : ''}
            onClick={() => this.handleClick('Pie Chart')}
          >
            <span>
              <Icon className="fas fa-chart-pie" />
            </span>
            Pie Chart
          </Button>
          <Button
            className={this.state.activeItem === 'Line Chart' ? 'bordered' : ''}
            onClick={() => this.handleClick('Line Chart')}
          >
            <span>
              <Icon className="fas fa-chart-line" />
            </span>
            Line Chart
          </Button>
        </ButtonGroup>
        <div className="content-section implementation">
          {this.detectChartType(data)}
        </div>
      </Widget>
    );
  }

  handleClick = type => {
    this.setState({ activeItem: type });
  };

  detectChartType = data => {
    const { activeItem } = this.state;
    let content = null;
    const newData = data;
    switch (activeItem) {
      case 'Pie Chart':
        content = <Chart type="pie" data={data} />;
        break;
      case 'Bar Chart':
        content = <Chart type="bar" data={data} />;
        break;
      case 'Line Chart':
        newData.datasets[0].borderColor = '#42A5F5';
        content = <Chart type="line" data={newData} />;
        break;
      default:
        content = <Chart type="pie" data={data} />;
    }
    return content;
  };
}

export default DataChart;
