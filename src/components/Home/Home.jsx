import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import AlarmsList from '../AlarmsList/alarmsList';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import DataChart from '../Charts/DataChart';
import Gaduges from '../gaduges/gaduges';
import GoogleApiWrapper from '../Map/MapWidget';

const Wrapper = styled.div`
  padding: 1%;
`;
const Container = styled.div`
  margin: 2%;
  width: 45%;
  border-radius: 4px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
`;
const TableContainer = styled.div`
  margin: 2%;
  width: 45%;
`;
const Row = styled.div`
  display: flex;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Row>
          <TableContainer>
            <AlarmsList />
          </TableContainer>
          <Container>
            <DataChart />
          </Container>
        </Row>
        <Row>
          <Container>
            <Gaduges />
          </Container>
          <Container>
            <GoogleApiWrapper />
          </Container>
        </Row>
      </Wrapper>
    );
  }
}

export default hot(module)(App);
