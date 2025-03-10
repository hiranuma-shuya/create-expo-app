import { useState, type FC } from "react";
import { StyleSheet, View } from "react-native";
import { registerRootComponent } from "expo";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";

import backgroundImage from "../assets/background-image.png";
import { Button } from "../components/button";
import { ImageViewer } from "../components/image-viewer";

const App: FC = () => {
  const [selectedImage, setSelectedImage] = useState<null | string>(null);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("画像が選択されていません");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={backgroundImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="写真を選択" onPress={pickImageAsync} />
        <Button label="この写真を使用" />
      </View>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

registerRootComponent(App);
