import {WebView} from 'react-native-webview';
import {StatusBar} from "expo-status-bar";

export default function App() {
  return (
      <WebView source={{uri: 'https://explorewithshayne.com'}} originWhitelist={['https://explorewithshayne.com']}>
          <StatusBar translucent={false} backgroundColor="rgb(222, 210, 181)"/>
      </WebView>
  );
}