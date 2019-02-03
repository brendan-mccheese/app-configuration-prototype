export const parseBoolean = (val: any) => {
    if (["true", "1"].indexOf(val) !== -1) return true;
    if (["false", "0"].indexOf(val) !== -1) return false;
    return undefined;
};
