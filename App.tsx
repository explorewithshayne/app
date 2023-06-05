import {WebView, WebViewNavigation} from 'react-native-webview';
import {StatusBar} from "expo-status-bar";
import {useEffect, useRef, useState} from "react";
import {BackHandler} from "react-native";

export default function App() {
    const [navigationState, setNavigationState] = useState<WebViewNavigation>();
    const webview = useRef<WebView>(null);
    
    useEffect((): (() => void) => {
        const onAndroidBackPress = (): boolean => {
            if (!navigationState?.canGoBack) return false;
            if (webview.current) {
                webview.current.goBack();
                return true; // prevent default behavior (exit app)
            }
            return false;
        };
        BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
        return (): void => {
            BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
        };
    }, [navigationState]);

  return (
      <WebView source={{uri: 'https://explorewithshayne.com'}} originWhitelist={['https://explorewithshayne.com']} ref={webview}
               onNavigationStateChange={navState => setNavigationState(navState)}>
          <StatusBar translucent={false} backgroundColor="rgb(222, 210, 181)"/>
      </WebView>
  );
}