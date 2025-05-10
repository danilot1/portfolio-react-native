import { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, Alert } from 'react-native';
import NavBar from '../components/NavBar';

function gerarSenha() {
  const digitos = [];
  while (digitos.length < 4) {
    const num = Math.floor(Math.random() * 10);
    if (!digitos.includes(num)) digitos.push(num);
  }
  return digitos.join('');
}

let senha = gerarSenha();

export default function Jogo() {
  const [tentativa, setTentativa] = useState('');
  const [historico, setHistorico] = useState([]);

  const fazerTentativa = () => {
    if (tentativa.length !== 4 || new Set(tentativa).size !== 4) {
      Alert.alert('Erro', 'Digite 4 dígitos únicos.');
      return;
    }

    let bulls = 0, cows = 0;
    for (let i = 0; i < 4; i++) {
      if (tentativa[i] === senha[i]) {
        bulls++;
      } else if (senha.includes(tentativa[i])) {
        cows++;
      }
    }

    setHistorico(prev => [{ tentativa, bulls, cows }, ...prev]);
    setTentativa('');
  };

  const mostrarSenha = () => {
    Alert.alert('Senha Secreta', senha);
  };

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 60 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Tente adivinhar a senha de 4 dígitos únicos</Text>
      <TextInput
        value={tentativa}
        onChangeText={setTentativa}
        placeholder="Digite a tentativa"
        keyboardType="numeric"
        maxLength={4}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
          borderRadius: 5
        }}
      />
      <Button title="Tentar" onPress={fazerTentativa} />
      <View style={{ marginVertical: 10 }}>
        <Button title="Mostrar senha" onPress={mostrarSenha} color="gray" />
      </View>
      <FlatList
        data={historico}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <Text>Tentativa: {item.tentativa} | Bulls: {item.bulls} | Cows: {item.cows}</Text>
        )}
      />
      <NavBar />
    </View>
  );
}
