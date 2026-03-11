import { AnimatedCurrency } from 'expo-animated-currency';
import { useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [value, setValue] = useState(0);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <Text style={styles.header}>Animated Currency</Text>
          <Group name="View">
            <AnimatedCurrency
              value={value}
              currency="USD"
              locale="en-US"
              style={styles.view}
            />
            <Button
              title="+$11.99"
              onPress={() => setValue((v) => v + 11.99)}
            />
          </Group>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  view: {
    flex: 1,
    height: 200,
  },
};
