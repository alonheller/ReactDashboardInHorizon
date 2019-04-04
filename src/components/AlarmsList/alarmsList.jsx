import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

class AlarmsList extends Component {
  constructor() {
    super();
    this.state = {
      alarms: [
        {
          created: '2019-03-31 01:01:47',
          name: 'Alarm 1',
          severity: 'high',
          resourceType: 'nova.host',
        },
        {
          created: '2019-03-30 18:01:47',
          name: 'Alarm 2',
          severity: 'high',
          resourceType: 'nova.host',
        },
        {
          created: '2019-03-31 15:01:47',
          name: 'Alarm 3',
          severity: 'high',
          resourceType: 'nova.host',
        },
        {
          created: '2019-03-29 12:01:47',
          name: 'Alarm 4',
          severity: 'high',
          resourceType: 'nova.host',
        },
        {
          created: '2019-03-29 12:01:47',
          name: 'Alarm 5',
          severity: 'high',
          resourceType: 'nova.host',
        },
        {
          created: '2019-03-29 12:01:47',
          name: 'Alarm 6',
          severity: 'high',
          resourceType: 'nova.host',
        },
        {
          created: '2019-03-29 12:01:47',
          name: 'Alarm 7',
          severity: 'high',
          resourceType: 'nova.host',
        },
        {
          created: '2019-03-29 12:01:47',
          name: 'Alarm 8',
          severity: 'high',
          resourceType: 'nova.host',
        },
      ],
    };
  }

  render() {
    const { alarms } = this.state;

    return (
      <DataTable value={alarms}>
        <Column field="name" header="Name" />
        <Column field="created" header="Created" />
        <Column field="severity" header="Severity" />
        <Column field="resourceType" header="Resource Type" />
      </DataTable>
    );
  }
}

export default AlarmsList;
