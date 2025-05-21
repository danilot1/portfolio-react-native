import { View, Text, StyleSheet, Linking } from 'react-native';
import NavBar from '@/components/NavBar';

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.text}>Email: dantecarvalho2803@gmail.com</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://www.linkedin.com/in/danilo-teixeira-de-carvalho-b0394a241/')}>
        LinkedIn: Danilo Teixeira
      </Text>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
  },
  link: {
    color: 'blue',
    marginTop: 8,
    fontSize: 14,
  },
});
