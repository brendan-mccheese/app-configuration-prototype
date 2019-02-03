import { getSetting } from "../getSetting";
import { parseBoolean } from "../parsers";
import { ModuleSettings } from ".";

class ModuleConfig implements ModuleSettings {
    get logToConsole(): boolean {
        return getSetting<boolean>({ settingName: "module.logToConsole", parser: parseBoolean });
    }

    get processDelay(): number {
        return getSetting<number>({
            settingName: "module.processDelay",
            parser: parseInt,
            checkDb: true,
        });
    }
}

const IntercomConfiguration = new ModuleConfig();
export default IntercomConfiguration;
