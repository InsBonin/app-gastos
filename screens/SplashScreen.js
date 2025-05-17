import { StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>💰 Gastos App</Text>
      <Text style={styles.tagline}>Controle suas finanças com facilidade</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  tagline: {
    marginTop: 12,
    fontSize: 16,
    color: '#777',
  },
});
