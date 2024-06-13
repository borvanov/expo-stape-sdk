import * as ExpoStapeSdkModule from "expo-stape-sdk-module";
import React, { useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";

export default function App() {
  useEffect(() => {
    ExpoStapeSdkModule.initialize("https://gtm.ollie.ai")
      .then((result) => {
        console.log("Initialized");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Click"
        onPress={() => {
          ExpoStapeSdkModule.sendStapeEvent("example_event", {
            test: "Test",
          })
            .then((result) => {
              console.log(result);
              console.log("Event sent");
            })
            .catch(() => {
              console.log("Event failed sent");
            });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
