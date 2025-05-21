import { View, Text, StyleSheet, Linking } from 'react-native';
import NavBar from '@/components/NavBar';

export default function Projetos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projetos</Text>
      <Text style={styles.text}>Veja alguns dos meus projetos no GitHub:</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/danilot1?tab=repositories')}>
        github.com/danilot1
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