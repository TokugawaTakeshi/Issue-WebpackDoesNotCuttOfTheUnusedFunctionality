import insertSubstring from "../../../Strings/insertSubstring";
const InvalidConfigErrorLocalization__English = {
    defaultTitle: "Invalid config",
    genericDescriptionPartTemplate: (parametersObject) => `The ${parametersObject.mentionToConfig} config is invalid.` +
        `${insertSubstring(parametersObject.messageSpecificPart, {
            modifier: (messageSpecificPart) => `\n${messageSpecificPart}`
        })}`
};
export default InvalidConfigErrorLocalization__English;
