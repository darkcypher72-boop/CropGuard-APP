
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function SplashScreen() {
  const router = useRouter();
  const { height } = useWindowDimensions();

  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.82)).current;
  const contentOpacity = useRef(new Animated.Value(0)).current;
  const contentY = useRef(new Animated.Value(20)).current;
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 650,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          friction: 7,
          tension: 55,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(contentOpacity, {
          toValue: 1,
          duration: 550,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(contentY, {
          toValue: 0,
          duration: 550,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    Animated.timing(progress, {
      toValue: 1,
      duration: 2350,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();

    const timer = setTimeout(() => {
      router.replace("/login");
    }, 2700);

    return () => clearTimeout(timer);
  }, []);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  /*
   * Keeps the layout comfortable on smaller phones.
   */
  const compact = height < 700;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Subtle background shapes */}
      <View style={styles.topShape} />
      <View style={styles.bottomShape} />

      {/* Small decorative crop/leaf marks */}
      <View style={styles.decorativeLeafOne} />
      <View style={styles.decorativeLeafTwo} />

      <View
        style={[
          styles.content,
          compact && styles.contentCompact,
        ]}
      >
        {/* Logo */}
        <Animated.View
          style={[
            styles.logoOuter,
            {
              opacity: logoOpacity,
              transform: [{ scale: logoScale }],
            },
          ]}
        >
          <View style={styles.logoBox}>
            <Image
              source={require("../../assets/images/cropguard-logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </Animated.View>

        {/* Brand content */}
        <Animated.View
          style={[
            styles.brandContent,
            {
              opacity: contentOpacity,
              transform: [{ translateY: contentY }],
            },
          ]}
        >
          <Text style={styles.title}>CropGuard</Text>

          <View style={styles.accentRow}>
            <View style={styles.accentLine} />
            <View style={styles.accentDot} />
            <View style={styles.accentLine} />
          </View>

          <Text style={styles.tagline}>
            Protecting Crops.{"\n"}Empowering Farmers.
          </Text>

          <Text style={styles.description}>
            Smart protection and guidance for{"\n"}
            better maize farming.
          </Text>

          {/* Loading */}
          <View style={styles.loadingContainer}>
            <View style={styles.loadingTop}>
              <Text style={styles.loadingLabel}>
                Preparing your experience
              </Text>

              <Text style={styles.loadingStatus}>
                SECURE
              </Text>
            </View>

            <View style={styles.progressTrack}>
              <Animated.View
                style={[
                  styles.progressBar,
                  { width: progressWidth },
                ]}
              />
            </View>

            <View style={styles.loadingBottom}>
              <Text style={styles.loadingHint}>
                Please wait
              </Text>

              <View style={styles.loadingDots}>
                <View style={styles.dot} />
                <View style={[styles.dot, styles.dotMiddle]} />
                <View style={styles.dot} />
              </View>
            </View>
          </View>
        </Animated.View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerTop}>
          <View style={styles.footerLine} />

          <Text style={styles.team}>
            TEAM ASTRAL
          </Text>

          <View style={styles.footerLine} />
        </View>

        <Text style={styles.footerMain}>
          CropGuard
        </Text>

        <Text style={styles.footerSub}>
          Maize Protection Platform
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FBF7",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  /* Background */

  topShape: {
    position: "absolute",
    width: 290,
    height: 290,
    borderRadius: 145,
    backgroundColor: "#EDF6EA",
    top: -190,
    right: -115,
  },

  bottomShape: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "#F0F7EE",
    bottom: -175,
    left: -130,
  },

  decorativeLeafOne: {
    position: "absolute",
    width: 7,
    height: 24,
    borderRadius: 8,
    backgroundColor: "#DCEBD9",
    top: "24%",
    left: 25,
    transform: [{ rotate: "-32deg" }],
  },

  decorativeLeafTwo: {
    position: "absolute",
    width: 6,
    height: 19,
    borderRadius: 8,
    backgroundColor: "#E2EFDF",
    top: "29%",
    right: 28,
    transform: [{ rotate: "30deg" }],
  },

  /* Main content */

  content: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 30,
    marginTop: -25,
  },

  contentCompact: {
    marginTop: -12,
  },

  logoOuter: {
    marginBottom: 22,
  },

  logoBox: {
    width: 122,
    height: 122,
    borderRadius: 36,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",

    elevation: 6,

    shadowColor: "#214E27",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.10,
    shadowRadius: 14,
  },

  logo: {
    width: 88,
    height: 88,
  },

  /* Brand */

  brandContent: {
    width: "100%",
    alignItems: "center",
  },

  title: {
    fontSize: 38,
    lineHeight: 45,
    fontWeight: "800",
    color: "#23592A",
    letterSpacing: 0.2,
  },

  accentRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 11,
    marginBottom: 14,
  },

  accentLine: {
    width: 19,
    height: 1,
    backgroundColor: "#A9C5A9",
  },

  accentDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#4D8954",
    marginHorizontal: 6,
  },

  tagline: {
    textAlign: "center",
    fontSize: 17,
    lineHeight: 25,
    fontWeight: "600",
    color: "#4E624F",
    letterSpacing: 0.1,
  },

  description: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 13,
    lineHeight: 20,
    color: "#7A887B",
    fontWeight: "400",
  },

  /* Loading */

  loadingContainer: {
    width: "88%",
    marginTop: 43,
  },

  loadingTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 9,
  },

  loadingLabel: {
    fontSize: 11.5,
    color: "#718071",
    fontWeight: "500",
  },

  loadingStatus: {
    fontSize: 8.5,
    letterSpacing: 1.2,
    color: "#628066",
    fontWeight: "700",
  },

  progressTrack: {
    width: "100%",
    height: 6,
    borderRadius: 10,
    backgroundColor: "#DFE9DF",
    overflow: "hidden",
  },

  progressBar: {
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#4D8954",
  },

  loadingBottom: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  loadingHint: {
    fontSize: 10,
    color: "#99A49A",
  },

  loadingDots: {
    flexDirection: "row",
    alignItems: "center",
  },

  dot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#A5B6A5",
  },

  dotMiddle: {
    marginHorizontal: 3,
  },

  /* Footer */

  footer: {
    position: "absolute",
    bottom: 27,
    alignItems: "center",
  },

  footerTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  footerLine: {
    width: 23,
    height: 1,
    backgroundColor: "#CCD9CC",
    marginHorizontal: 9,
  },

  team: {
    fontSize: 9.5,
    fontWeight: "800",
    letterSpacing: 2,
    color: "#527257",
  },

  footerMain: {
    fontSize: 10.5,
    fontWeight: "600",
    color: "#78877A",
  },

  footerSub: {
    marginTop: 3,
    fontSize: 9.5,
    color: "#A0AAA1",
  },
});

