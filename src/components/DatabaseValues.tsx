import * as React from 'react';

interface DatabaseValuesProps {
  databaseConfig: any
}

export class DatabaseValues extends React.Component<DatabaseValuesProps> {
  render() {
    const dbValues = JSON.stringify(this.props.databaseConfig, null, 4);
    return <div>
      <pre>
        {dbValues}
      </pre>
    </div>
  }
}
