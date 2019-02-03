export const convertToEnvironmentVarName = (name: string) => {
    const parts = name.split(/(?=[A-Z\.])/);
    const envName = parts.map(x => x.replace(".", "").toUpperCase()).join("_");
    console.log(envName);
    return envName;
};
