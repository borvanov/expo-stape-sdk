package expo.modules.stapesdkmodule

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.Promise
import io.stape.sgtm.Options;
import io.stape.sgtm.Stape;
import io.stape.sgtm.EventData;

class ExpoStapeSdkModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoStapeSdkModule')` in JavaScript.
    Name("ExpoStapeSdkModule")

    AsyncFunction("initialize") { domain: String, promise: Promise ->
      try {
        val stape = Stape.withOption(Options(domain))
        promise.resolve("Initialized")
      } catch (e: Exception) {
        promise.reject("Error", e)
      }
    }

    // Defines a JavaScript function that always returns a Promise and whose native code
    // is by default dispatched on the different thread than the JavaScript runtime runs on.
    AsyncFunction("sendStapeEvent") { name: String, payload: Map<String, String>, promise: Promise ->
      try {
        Stape.sendEvent(name, HashMap(payload));
        promise.resolve("Event Sent");
      } catch (Exception e) {
        promise.reject("Error", e);
      }
    }
  }
}
