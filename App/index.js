import { View, Text } from 'react-native';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 60 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Bem-vindo ao meu Portfólio!</Text>
      <Text>Use o menu abaixo para navegar entre as seções.</Text>
      <NavBar />
    </View>
  );
}
