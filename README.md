# Expo Stape SDK module

## Installation

`npm i git+https://github.com/borvanov/expo-stape-sdk.git`

## Usage

```ts
export default function App() {
  useEffect(() => {
    ExpoStapeSdkModule.initialize("gtm.stape.io")
      .then((result) => {
        console.log(result);
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
            })
            .catch(() => {
              console.log("Event failed sent");
            });
        }}
      />
    </View>
  );
}

```
