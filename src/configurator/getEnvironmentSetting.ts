import { convertToEnvironmentVarName } from "./convertToEnvironmentVarName";
import { process } from "./fake-settings/fakeEnvironmentVars";

export const getEnvironmentSetting = (name: string) => {
    const envName = convertToEnvironmentVarName(name);
    return process.env[envName];
};
