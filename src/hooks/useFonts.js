import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    satoshi: require("../assets/fonts/Satoshi-Medium.ttf"),
    satoshiBold: require("../assets/fonts/Satoshi-Bold2.ttf"),
  });
