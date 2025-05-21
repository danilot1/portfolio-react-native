import { View, Text, StyleSheet } from 'react-native';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Portfólio de Danilo Teixeira</Text>
      <Text style={styles.subtitle}>Desenvolvedor de Software | UNICAP</Text>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});
