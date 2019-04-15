import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
import { TabMenu } from 'primereact/tabmenu';
import { inject, observer } from 'mobx-react';
import { Widget } from '../Widget/Widget';
import './datachart.css';

@inject('Store')
@observer
class DataChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Bar Chart',
      items: [
        { label: 'Bar Chart', icon: 'fas fa-chart-bar' },
        { label: 'Pie Chart', icon: 'fas fa-chart-pie' },
        { label: 'Line Chart', icon: 'fas fa-chart-line' },
      ],
    };
  }

  render() {
    const { activeItem } = this.state;
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
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
    const data = this.props.Store.selectedAlarm ? data1 : data2;
    const { items } = this.state;
    return (
      <Widget>
        <div className="content-section implementation">
          <TabMenu
            model={items}
            activeItem={activeItem}
            onTabChange={e => this.setState({ activeItem: e.value.label })}
          />
          {this.detectChartType(data)}
        </div>
      </Widget>
    );
  }

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
