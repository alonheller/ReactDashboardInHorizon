import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  width: 32%;
`;

const Container = styled.div`
  padding: 2%;
  display: inline-block;
  width: 100%;
`;

class gaduges2 extends Component {
  render() {
    const data1 = {
      datasets: [
        {
          data: [500, 100],
          backgroundColor: ['#FF6384', '#dddddd'],
        },
      ],
    };
    const data2 = {
      datasets: [
        {
          data: [300, 100],
          backgroundColor: ['#c3d500', '#dddddd'],
        },
      ],
    };
    const data3 = {
      datasets: [
        {
          data: [200, 100],
          backgroundColor: ['#00b5e1', '#dddddd'],
        },
      ],
    };

    return (
      <Container>
        <Wrapper>
          <Chart type="doughnut" data={data1} />
        </Wrapper>
        <Wrapper>
          <Chart type="doughnut" data={data2} />
        </Wrapper>
        <Wrapper>
          <Chart type="doughnut" data={data3} />
        </Wrapper>
      </Container>
    );
  }
}
export default gaduges2;
