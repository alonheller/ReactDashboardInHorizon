import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
// import { Button } from 'primereact/button';
// import { Redirect } from 'react-router-dom';
import AlarmsList from '../AlarmsList/alarmsList';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import DataChart from '../Charts/DataChart';
import Gaduges from '../gaduges/gaduges';
// import Gaduges2 from '../gaduges2/gaduges2';
import GoogleApiWrapper from '../Map/MapWidget';
import HeaderCard from '../HeaderCard/HeaderCard';

const Wrapper = styled.div`
  padding: 1%;
`;

const Container = styled.div`
  margin: 2%;
  width: 45%;
  border-radius: 4px;
  border: solid 1px #bebebe;
  background-color: #fbfbfb;
`;
const TableContainer = styled.div`
  margin: 2%;
  width: 45%;
`;
const Row = styled.div`
  display: flex;
`;
const CardContainer = styled.div`
  width: 100%
  border-right: 1px solid #9f9f9f;
  border-left: 1px solid #9f9f9f;
  padding-left: 1%;
  margin-left: 2%;
  margin-right: 2%;
  padding-right: 2%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleSubmit = () => {
  //   this.setState({
  //     toDashboard: true,
  //   });
  // };

  render() {
    // if (this.state.toDashboard === true) {
    //   return <Redirect to="/map" />;
    // }
    return (
      <Wrapper>
        <Row>
          <CardContainer>
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
          </CardContainer>
        </Row>
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
        <Row>
          <Container>{/* <Gaduges2 /> */}</Container>
          <Container>dddddddddddddd</Container>
        </Row>
      </Wrapper>
    );
  }
}

export default hot(module)(App);
