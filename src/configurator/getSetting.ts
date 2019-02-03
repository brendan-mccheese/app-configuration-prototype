import { getEnvironmentSetting } from "./getEnvironmentSetting";
import { getSettingsFileSetting } from "./getSettingsFileSetting";
import { getDatabaseSetting } from "./getDatabaseSetting";

type options<T> = {
    settingName: string;
    parser?: (val) => T;
    checkDb?: boolean;
};

export const getSetting = <T>({ settingName, parser, checkDb }: options<T>): T => {
    let setting: any = null;

    if (checkDb === true) {
        setting = getDatabaseSetting(settingName);
        console.log(setting);
        if (setting != null && parser) {
            return parser(setting);
        }
    }
    if (setting == null) {
        setting = getEnvironmentSetting(settingName);
        if (setting != null && parser) {
            return parser(setting);
        }
    }
    if (setting == null) {
        setting = getSettingsFileSetting(settingName);
    }
    if (setting != null) {
        return setting.toString();
    }
    return undefined;
};
