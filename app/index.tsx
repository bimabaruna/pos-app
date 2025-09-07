import React, { useRef, useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, BackHandler, Platform } from "react-native";
import { WebView } from "react-native-webview";
import { WebView as RNWebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";
import { DEV_URL, PROD_URL } from "@env";

const APP_URL = __DEV__
  ? process.env.EXPO_PUBLIC_DEV_URL || ""
  : process.env.EXPO_PUBLIC_PROD_URL || "";
console.log(APP_URL)

const injectedJS = `
  (function () {
    window.isReactNativeWebView = true;
    window.dispatchEvent(new CustomEvent('react-native-ready'));
  })();
  true;
`;

export default function Index() {
  const webviewRef = useRef<WebView>(null);
  const [loading, setLoading] = useState(true);
  const [canGoBack, setCanGoBack] = useState(false);

  if (Platform.OS === "android") {
    // Enable chrome://inspect debugging for WebView
    (RNWebView as any).setWebContentsDebuggingEnabled?.(true);
  }

  useEffect(() => {
    const onBackPress = () => {
      if (canGoBack && webviewRef.current) {
        webviewRef.current.goBack();
        return true;
      }
      return false;
    };

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      onBackPress
    );

    return () => subscription.remove();
  }, [canGoBack]);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <View style={styles.container}>
        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" />
          </View>
        )}
        <WebView
          ref={webviewRef}
          source={{ uri: APP_URL }}
          originWhitelist={["*"]}
          startInLoadingState
          onLoadEnd={() => setLoading(false)}
          injectedJavaScript={injectedJS}
          onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
          javaScriptEnabled
          domStorageEnabled
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff", // match app background
  },
  container: { flex: 1 },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    backgroundColor: "rgba(255,255,255,0.7)", // slightly dim background while loading
  },
});
