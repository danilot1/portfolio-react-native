import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function NavBar() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable style={styles.link} onPress={() => router.push('/home')}>
        <Text>Home</Text>
      </Pressable>
      <Pressable style={styles.link} onPress={() => router.push('/sobre')}>
        <Text>Sobre</Text>
      </Pressable>
      <Pressable style={styles.link} onPress={() => router.push('/projetos')}>
        <Text>Projetos</Text>
      </Pressable>
      <Pressable style={styles.link} onPress={() => router.push('/contato')}>
        <Text>Contato</Text>
      </Pressable>
      <Pressable style={styles.link} onPress={() => router.push('/jogo')}>
        <Text>Jogo</Text>
      </Pressable>
      <Pressable style={styles.link} onPress={() => router.push('/exp_acd')}>
        <Text>Experiencia Acadêmica</Text>
      </Pressable>
      <Pressable style={styles.link} onPress={() => router.push('/exp_pro')}>
        <Text>Experiencia Profissional</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderColor: '#ccc',
    marginTop: 20,
  },
  link: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
});
