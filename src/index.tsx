import * as React from 'react'
import {render} from 'react-dom';
import './style.css';
import {AppConfiguration} from "./configurator";
import {fakeDatabaseSettings, process, SettingsFile} from "./configurator/fake-settings";
import {DatabaseValues, EnvironmentValues, SettingsFileValues} from "./components";

interface AppProps { }
interface AppState {  
  config: any;
  databaseConfig: any;
  envVars: any;
  settingsFile: any;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      config: AppConfiguration.getConfig(),
      databaseConfig: fakeDatabaseSettings,
      envVars: process,
      settingsFile: SettingsFile
    };
  }

  increaseDelay() {
    fakeDatabaseSettings.module.processDelay += 1000;
    this.setState({
      config: AppConfiguration.getConfig()
    })
  }

  render() {
    const configString = JSON.stringify(this.state.config, null, 4);
    return (
      <div>
        <h4>Configuration Fall Through Prototype</h4>
        <h5>Resulting Configuration:</h5>
        <div>
          <pre>{configString}</pre>
        </div>
        <div className="flex-grid">
          <div className="col">
            <h5>Database Values:</h5>
            <DatabaseValues databaseConfig={this.state.databaseConfig}>     </DatabaseValues>
            </div>
          <div className="col">
          <h5>Environment Values:</h5>
          <EnvironmentValues envVars={this.state.envVars} />
          </div>
          <div className="col">
          <h5>Settings File Values:</h5>
          <SettingsFileValues {...this.state.settingsFile} />
          </div>
        </div>
        <hr />
        <div>
          <button type="button" onClick={() => this.increaseDelay()}>Increase Delay</button>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
