import { StyleSheet, Text, View } from 'react-native';

import * as VideoEditorPoc from 'video-editor-poc';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{VideoEditorPoc.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
