import * as React from "react";

interface EnvironmentValuesProps {
  envVars: any;
}

export class EnvironmentValues extends React.Component<EnvironmentValuesProps> {
  render() {
    const envVars = JSON.stringify(this.props.envVars, null, 4);
    return <div>
        <pre>
          {envVars}
        </pre>
      </div>
  }
}
