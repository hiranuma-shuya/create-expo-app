import type { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";

const App: FC = () => {
  return (
    <View style={styles.container}><Text>Open up afsdfasdfasfdsadfあsdffpp.tsx to start working ofasdfmasdofjasofjasdofjasifjasdiofjasdo your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

registerRootComponent(App);
