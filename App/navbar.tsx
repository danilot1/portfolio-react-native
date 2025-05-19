import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

const NavBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Link href="/" style={styles.link}><Text>Home</Text></Link>
      <Link href="sobre" style={styles.link}><Text>Sobre</Text></Link>
      <Link href="academica" style={styles.link}><Text>Acadêmica</Text></Link>
      <Link href="profissional" style={styles.link}><Text>Profissional</Text></Link>
      <Link href="projetos" style={styles.link}><Text>Projetos</Text></Link>
      <Link href="jogo" style={styles.link}><Text>Jogo</Text></Link>
    </View>
  );
};

type Styles = {
  container: ViewStyle;
  link: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
    gap: 10,
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderColor: '#ccc',
    marginTop: 20,
  },
  link: {
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
});

export default NavBar;
