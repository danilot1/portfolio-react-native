import { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, Alert, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

function gerarSenha(): string {
  const digitos: number[] = [];
  while (digitos.length < 4) {
    const num = Math.floor(Math.random() * 10);
    if (!digitos.includes(num)) digitos.push(num);
  }
  return digitos.join('');
}

let senha = gerarSenha();

export default function Jogo() {
  const [tentativa, setTentativa] = useState('');
  const [historico, setHistorico] = useState<{ tentativa: string; bulls: number; cows: number }[]>([]);

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

    if (bulls === 4) {
      Alert.alert('Parabéns!', 'Você acertou a senha!');
      senha = gerarSenha(); // Reinicia a senha
      setHistorico([]);
    }
  };

  const mostrarSenha = () => {
    Alert.alert('Senha Secreta', senha);
  };

  return (
    <FlatList
      ListHeaderComponent={
        <View style={styles.container}>
          <Text style={styles.title}>Jogo da Senha (Bulls and Cows)</Text>
          <Text style={styles.subtitle}>Tente adivinhar a senha de 4 dígitos únicos</Text>

          <TextInput
            value={tentativa}
            onChangeText={setTentativa}
            placeholder="Digite sua tentativa"
            keyboardType="numeric"
            maxLength={4}
            style={styles.input}
          />

          <Button title="Tentar" onPress={fazerTentativa} />
          <View style={{ marginTop: 10 }}>
            <Button title="Mostrar Senha" onPress={mostrarSenha} color="#888" />
          </View>

          <Text style={styles.historicoTitulo}>Histórico de Tentativas:</Text>
        </View>
      }
      data={historico}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={{ paddingHorizontal: 24 }}>
          <Text style={styles.historicoItem}>
            Tentativa: {item.tentativa} | Bulls: {item.bulls} | Cows: {item.cows}
          </Text>
        </View>
      )}
      ListFooterComponent={
        <View style={styles.voltar}>
          <Link href="/">
            <Text style={styles.voltarTexto}>← Voltar ao Portfólio</Text>
          </Link>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  historicoTitulo: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  historicoItem: {
    fontSize: 14,
    paddingVertical: 2,
  },
  voltar: {
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 50,
  },
  voltarTexto: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
});
