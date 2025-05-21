import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '@/components/NavBar';

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.text}>
        Este aplicativo foi desenvolvido como parte do meu portfólio, demonstrando minhas habilidades em desenvolvimento mobile com React Native.
      </Text>

      <Text style={styles.subtitle}>Tecnologias e Ferramentas Utilizadas:</Text>
      <View style={styles.list}>
        <Text style={styles.item}>• React Native</Text>
        <Text style={styles.item}>• Expo</Text>
        <Text style={styles.item}>• TypeScript</Text>
        <Text style={styles.item}>• Expo Router (para navegação entre telas)</Text>
        <Text style={styles.item}>• React Navigation (base usada pelo Expo Router)</Text>
        <Text style={styles.item}>• FlatList e ScrollView (renderização de listas)</Text>
        <Text style={styles.item}>• Alert, TextInput, Button (componentes nativos)</Text>
        <Text style={styles.item}>• Estilização com StyleSheet</Text>
        <Text style={styles.item}>• Organização modular com componentes separados</Text>
      </View>

      <Text style={styles.subtitle}>Objetivo:</Text>
      <Text style={styles.text}>
        O principal objetivo foi criar um portfólio interativo e funcional, incluindo um jogo ("Bulls and Cows") e navegação para outras seções como Experiência Acadêmica, Profissional e Projetos.
      </Text>
      <NavBar/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
  list: {
    marginLeft: 12,
  },
  item: {
    fontSize: 16,
    marginBottom: 4,
  },
  voltar: {
    marginTop: 30,
    alignItems: 'center',
  },
  voltarTexto: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
});
