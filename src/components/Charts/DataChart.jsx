import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
import { TabMenu } from 'primereact/tabmenu';

class DataChart extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: null,
      items: [
        { label: 'Bar Chart', icon: 'fas fa-chart-bar' },
        { label: 'Pie Chart', icon: 'fas fa-chart-pie' },
        { label: 'Line Chart', icon: 'fas fa-chart-line' },
      ],
    };
  }

  render() {
    const { activeItem } = this.state;
    const data = {
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
    const { items } = this.state;
    return (
      <div>
        <div className="content-section implementation">
          <TabMenu
            model={items}
            activeItem={activeItem}
            onTabChange={e => this.setState({ activeItem: e.value.label })}
          />
          {this.detectChartType(data)}
        </div>
      </div>
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
        console.log(newData);
        content = <Chart type="line" data={newData} />;
        break;
      default:
        content = <Chart type="pie" data={data} />;
    }
    return content;
  };
}

export default DataChart;
