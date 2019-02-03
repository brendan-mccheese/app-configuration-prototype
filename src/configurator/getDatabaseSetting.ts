import { fakeDatabaseSettings } from "./fake-settings/fakeDatabaseSettings";
import { get } from "lodash";

export const getDatabaseSetting = (settingName: string) => {
    console.log(settingName);
    return get(fakeDatabaseSettings, settingName);
};
