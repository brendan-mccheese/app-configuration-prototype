import { ModuleSettings } from "./nested-module";

export interface AppSettings {
    sendEmails: boolean;
    fromEmail: string;
    thirdPartyApiUri: string;
    module: ModuleSettings;
}
