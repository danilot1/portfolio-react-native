import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '@/components/NavBar';

export default function Exp_Pro() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Estágio</Text>
      <Text style={styles.text}>NUTES - Núcleo de Telessaúde do HC/UFPE (2023.1 - 2023.2)</Text>
      <Text style={styles.title}>Serviço Comunitário</Text>
      <Text style={styles.text}>Projeto de jogos lúdicos com idosas no ISMEP (2023.2 - 2024)</Text>
      <NavBar />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
});