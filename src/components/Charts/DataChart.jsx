import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
import { SelectButton } from 'primereact/selectbutton';
import styled from 'styled-components';

const ChartContainer = styled.div`
  margin: 2%;
  width: 70%;
  border-radius: 4px;
`;
class DataChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 'BarChart',
    };
  }

  render() {
    const { value1 } = this.state;
    const options = [
      { label: 'PieChart', value: 'PieChart' },
      { label: 'BarChart', value: 'BarChart' },
    ];
    const data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 150, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };

    return (
      <div>
        <SelectButton
          value={value1}
          options={options}
          onChange={e => this.setState({ value1: e.value })}
        />
        <ChartContainer>
          {value1 === 'PieChart' ? (
            <Chart type="pie" data={data} />
          ) : (
            <Chart type="bar" data={data} />
          )}
        </ChartContainer>
      </div>
    );
  }
}

export default DataChart;
