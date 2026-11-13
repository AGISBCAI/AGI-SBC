import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AGI-SBC</Text>
      <Text style={styles.subtitle}>Phase 2A foundation</Text>
      <Text style={styles.note}>
        Android and Web foundation is being prepared.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#101820',
  },
  title: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: '#a8c7d8',
    fontSize: 16,
    marginBottom: 12,
  },
  note: {
    color: '#d5dde2',
    fontSize: 14,
    textAlign: 'center',
  },
});
