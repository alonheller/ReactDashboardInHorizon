import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import AlarmsList from '../AlarmsList/alarmsList';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import DataChart from '../Charts/DataChart';
import Gaduges from '../gaduges/gaduges';
import HeaderCard from '../HeaderCard/HeaderCard';
import { Widget } from '../Widget/Widget';

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'widget-cards widget-cards widget-cards widget-cards widget-cards widget-cards'
    'widget-table widget-table widget-table widget-chart widget-chart widget-chart'
    'widget-gauges widget-gauges widget-gauges widget-chart widget-chart widget-chart';
  grid-gap: 15px;
  background-color: #f5f5f5;
  height: 100%;
  padding: 0;
  gap: 20px 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const widgetStyle = {
  'grid-area': 'widget-cards',
};

const AlarmsContainer = styled.div`
  grid-area: widget-table;
`;

const ChartContainer = styled.div`
  grid-area: widget-chart;
`;

const GaugesContainer = styled.div`
  grid-area: widget-gauges;
`;
const Content = styled.div`
  display: flex;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid>
        <div style={widgetStyle}>
          <Widget title="RealTime Monitor">
            <Content>
              <HeaderCard
                title="Servers"
                number="50"
                color="#66b2b5"
                icon="fas fa-server fa-3x"
              />
              <HeaderCard
                title="Data Bases"
                number="300"
                color="#f47b73"
                icon="fas fa-layer-group fa-3x"
              />
              <HeaderCard
                title="Vms"
                number="8,500"
                color="#fbad4b"
                icon="fas fa-cubes fa-3x"
              />
              <HeaderCard
                title="Users"
                color="#72d8ff"
                number="10"
                icon="fas fa-user fa-3x"
              />
            </Content>
          </Widget>
        </div>

        <AlarmsContainer>
          <AlarmsList />
        </AlarmsContainer>

        <ChartContainer>
          <DataChart />
        </ChartContainer>

        <GaugesContainer>
          <Gaduges />
        </GaugesContainer>
      </Grid>
    );
  }
}

export default hot(module)(App);
