import React from "react-native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LandingPageButton from "../Button/LandingPageButton";
import LandingPageButton2 from "../Button/LandingPageButton2";
import { RectButton } from "react-native-gesture-handler";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import NextButton from "../Button/NextButton";
import PreviousButton from "../Button/PreviousButton";

const LandingPageBackground = ({
  nav,
  LandingPageObject,
  page,
  skippedPage,
}) => {
  // const RightSwipeActions = () => {
  //   return (
  //     <View>
  //       <Text>Right Action</Text>
  //     </View>
  //   );
  // };

  // const renderLeftActions = (progress, dragX) => {
  //   const trans = dragX.interpolate({
  //     inputRange: [0, 50, 100, 101],
  //     outputRange: [-20, 0, 0, 1],
  //   });
  //   return (
  //     <RectButton style={styles.leftAction} onPress={this.close}>
  //       <Animated.Text
  //         style={[
  //           styles.actionText,
  //           {
  //             transform: [{ translateX: trans }],
  //           },
  //         ]}
  //       >
  //         Archive
  //       </Animated.Text>
  //     </RectButton>
  //   );
  // };
  return (
    <View style={styles.container1}>
      <SafeAreaView>
        <GestureHandlerRootView>
          <Swipeable>
            <View style={styles.upperBackground}>
              <View style={styles.pictures}>
                <View style={styles.containerB}>
                  <Image source={LandingPageObject.tabImage} />
                </View>
                <View style={styles.imageView}>
                  <View style={styles.previous}>
                    <PreviousButton
                      title={LandingPageObject.previousText}
                      nav={nav}
                      page={skippedPage}
                    />
                  </View>
                  <Image source={LandingPageObject.image} />
                  <View style={styles.previous}>
                    <NextButton
                      title={LandingPageObject.nextText}
                      nav={nav}
                      page={skippedPage}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.oval}>{/* <Text>Hello</Text> */}</View>
            </View>
            <View style={styles.lowerBackground}>
              <View style={styles.container2}>
                <Text style={styles.container5}>{LandingPageObject.text}</Text>
                <Text style={styles.container3}>
                  {LandingPageObject.subText}
                </Text>
              </View>
              {/* <View styles={styles.dots}></View> */}
              <>
                <View style={styles.container4}>
                  <LandingPageButton2
                    title={LandingPageObject.buttonText}
                    nav={nav}
                    page={skippedPage}
                  />
                  <LandingPageButton
                    title={LandingPageObject.button2Text}
                    nav={nav}
                    page={page}
                  />
                </View>
              </>
            </View>
          </Swipeable>
        </GestureHandlerRootView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    width: 450,
  },
  previous: {
    fontSize: 30,
    marginTop: 200,
    color: "grey",
  },
  containerD: {
    position: "absolute",
    top: 20,
  },
  containerC: {
    position: "absolute",
    top: 270,
  },
  containerA: {
    position: "absolute",
    right: 0,
    bottom: 20,
  },
  containerB: {
    marginBottom: 30,
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  container1: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  container3: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
    lineHeight: 20,
    color: "#155E56",
    width: 350,
    fontFamily: "satoshi",
    fontWeight: "600",
  },
  container4: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
    width: 100,
    fontFamily: "satoshi",
  },
  container5: {
    fontSize: 24,
    fontWeight: "900",
    fontFamily: "satoshiBold",
    color: "#00C796",
  },
  container6: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    width: 300,
  },
  upperBackground: {
    backgroundColor: "#FFF",
    height: "50%",
    justifyContent: "space-between",
    paddingTop: 60,
    paddingHorizontal: 60,
  },
  lowerBackground: {
    backgroundColor: "#FFF",
    height: "50%",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    paddingVertical: 40,
    gap: 90,
  },
  oval: {
    height: 30,
  },
  pictures: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    borderWidth: 1,
    padding: 15,
    borderColor: "white",
    backgroundColor: "white",
    color: "#2D6CDF",
    fontWeight: "600",
    fontFamily: "satoshi",
  },
  text2: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#2D6CDF",
    paddingHorizontal: 20,
    color: "white",
    // eslint-disable-next-line no-dupe-keys
    borderRadius: 10,
    borderWidth: 0,
    borderColor: "#2D6CDF",
    fontFamily: "satoshi",
  },
  nextText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default LandingPageBackground;
