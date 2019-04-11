import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'antd';
import './alarmList.css';
import styled from 'styled-components';

const HeaderCardIcon = styled.span`
  height: 10px;
`;

const Icon = styled.i`
  color: #4174ff;
`;

class AlarmsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alarms: [
        {
          created: '18 hours ago',
          name: 'Host Utilization is too high (96%)',
          severity: 'High',
          resourceType: 'Host',
        },
        {
          created: '33 minutes ago',
          name: 'Cluster is going to explode soon',
          severity: 'Medium',
          resourceType: 'Cluster',
        },
        {
          created: 'Last Thursday at 5:33 PM',
          name: 'Host will shut down in 30 minutes',
          severity: 'Medium',
          resourceType: 'Host',
        },
        {
          created: '2 minutes ago',
          name: 'VM name is ridiculous',
          severity: 'Low',
          resourceType: 'VM',
        },
        {
          created: 'Last Christmas',
          name: 'Network latency is on the face',
          severity: 'Low',
          resourceType: 'Network',
        },
        {
          created: 'A year ago',
          name: "VM 'Sami' renamed to 'Sami-Saviv'",
          severity: 'Low',
          resourceType: 'VM',
        },
      ],
    };
    this.severityTemplate = this.severityTemplate.bind(this);
    this.resourceTemplate = this.resourceTemplate.bind(this);
  }

  resourceTemplate = rowData => {
    let icon = '';
    switch (rowData.resourceType.toLowerCase()) {
      case 'vm':
        icon = 'fas fa-desktop';
        break;
      case 'network':
        icon = 'fas fa-wifi';
        break;
      case 'host':
        icon = 'fas fa-server';
        break;
      case 'cluster':
        icon = 'fas fa-layer-group';
        break;
      default:
        icon = 'fas fa-server';
        break;
    }
    return (
      <HeaderCardIcon>
        <Icon className={icon} />
        <span> {rowData.resourceType}</span>
      </HeaderCardIcon>
    );
  };

  severityTemplate = rowData => {
    let color;
    switch (rowData.severity.toLowerCase()) {
      case 'high':
        color = 'red';
        break;
      case 'medium':
        color = 'volcano';
        break;
      case 'low':
        color = 'purple';
        break;
      default:
        color = 'geekblue';
        break;
    }
    return <Tag color={color}>{rowData.severity}</Tag>;
  };

  render() {
    const { alarms } = this.state;

    return (
      <DataTable value={alarms} rowClassName={this.rowClassName}>
        <Column field="name" header="Name" />
        <Column field="created" header="Created" />
        <Column
          style={{ width: '6em' }}
          header="Severity"
          field="severity"
          body={this.severityTemplate}
        />
        <Column
          field="resourceType"
          header="Resource"
          style={{ width: '9em' }}
          body={this.resourceTemplate}
        />
      </DataTable>
    );
  }
}

export default AlarmsList;
