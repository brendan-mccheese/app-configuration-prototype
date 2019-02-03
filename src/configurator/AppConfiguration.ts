import { ModuleSettings, ModuleConfig } from "./nested-module";
import { getSetting } from "./getSetting";
import { parseBoolean } from "./parsers";
import { AppSettings } from "./AppSettings";

class AppConfiguration implements AppSettings {
    get sendEmails(): boolean {
        return getSetting({ settingName: "sendEmails", parser: parseBoolean });
    }

    get thirdPartyApiUri(): string {
        return getSetting({ settingName: "thirdPartyApi.baseApiUrl" });
    }

    get fromEmail(): string {
        return getSetting({ settingName: "fromEmail" });
    }

    readonly module = ModuleConfig;

    getConfig(): AppSettings {
        return {
            sendEmails: this.sendEmails,
            fromEmail: this.fromEmail,
            thirdPartyApiUri: this.thirdPartyApiUri,
            module: {
                logToConsole: this.module.logToConsole,
                processDelay: this.module.processDelay,
            } as ModuleSettings,
        };
    }
}

const appConfiguration = new AppConfiguration();
export default appConfiguration;
