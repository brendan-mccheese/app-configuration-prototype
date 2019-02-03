import { SettingsFile } from "./fake-settings/fakeSettingsFile";
import { get } from "lodash";

export const getSettingsFileSetting = (settingName: string) => {
    console.log(settingName);
    return get(SettingsFile.settings, settingName);
};
