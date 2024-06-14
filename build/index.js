import ExpoStapeSdkModule from "./ExpoStapeSdkModule";
export async function initialize(domain) {
    return await ExpoStapeSdkModule.initialize(domain);
}
export async function sendStapeEvent(name, payload) {
    return await ExpoStapeSdkModule.sendStapeEvent(name, payload);
}
//# sourceMappingURL=index.js.map