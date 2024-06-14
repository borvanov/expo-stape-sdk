import ExpoModulesCore
import StapeSDK

public class ExpoStapeSdkModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoStapeSdkModule')` in JavaScript.
    Name("ExpoStapeSdkModule")

    AsyncFunction("initialize") { (domain: String, promise: Promise) in
      let fullUrl = "https://\(domain)"
      guard let url = URL(string: fullUrl) else {
        promise.reject("Invalid URL", "Provided domain is not a valid URL.")
        return
      }
      let config = Stape.Configuration(domain: url, endpoint: "/mobile")
      Stape.start(configuration: config)
      promise.resolve("Initialized")
    }

    AsyncFunction("sendStapeEvent") { (name: String, payload: [String: String], promise: Promise) in
      let event = Stape.Event(name: name, payload: payload)
      Stape.send(event: event) { result in
        switch result {
        case .success(let response):
          promise.resolve(response.payload)
        case .failure(let error):
          promise.reject("Error", error.localizedDescription)
        }
      }
    }
  }
}
