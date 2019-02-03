import React = require("react");

export const SettingsFileValues = (settingsFile: any) => {
  const values = JSON.stringify(settingsFile, null, 4);
  return <div>
    <pre>
      {values}
    </pre>
  </div>;
}
