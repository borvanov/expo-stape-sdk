import ExpoStapeSdkModule from "./ExpoStapeSdkModule";

export async function initialize(domain: string) {
  return await ExpoStapeSdkModule.initialize(domain);
}

export async function sendStapeEvent(
  name: string,
  payload: Record<string, string>,
) {
  return await ExpoStapeSdkModule.sendStapeEvent(name, payload);
}
