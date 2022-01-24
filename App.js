import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, StatusBar, Text, View, SafeAreaView } from 'react-native';
import {
  DefaultTheme,
  Searchbar,
  useTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  dark: true,
  mode: 'exact',
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { colors } = useTheme();
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar
            placeholder="Search "
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={[styles.list, { borderColor: colors.primary }]}>
          <Text theme={{ fonts: { medium: 'Open Sans' } }}>{searchQuery}</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    borderWidth: 2,
    padding: 16,
  },
});
