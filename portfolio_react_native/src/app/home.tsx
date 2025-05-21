import { ScrollView, View, Text, StyleSheet, Linking, Image } from 'react-native';
import NavBar from '@/components/NavBar';
export default function Home                                                                                                     () {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('@/assets/my_photo.png')} 
        style={styles.photo}
      />
      <Text style={styles.title}>Portfólio - Danilo Teixeira</Text>
        <NavBar />
      <Section title="Sobre Mim">
        <Bullet>- Estudante de Ciência da Computação na Universidade Católica de Pernambuco</Bullet>
        <Bullet>- Desenvolvedor de software com experiência em HTML, CSS e JavaScript</Bullet>
        <Bullet>- Também possuo experiência nas seguintes linguagens: Python, C e Java</Bullet>
        <Text style={styles.paragraph}>
          Perfil: Sou estudante de ciência da computação e busco atuar desenvolvendo softwares e
          resolvendo problemas. Minhas áreas de interesse são desenvolvimento web (front-end),
          ciência de dados e cibersegurança.
        </Text>
      </Section>

      <Section title="Formação">
        <Text style={styles.paragraph}>
          Técnico em Análise e Desenvolvimento de Sistemas{'\n'}
          Escola Técnica Estadual - Cícero Dias{'\n'}
          Recife, PE — 2021.2 a 2022
        </Text>
        <Text style={styles.paragraph}>
          Bacharelado em Ciência da Computação{'\n'}
          Universidade Católica de Pernambuco{'\n'}
          Recife, PE — 2023 a 2027 (em andamento)
        </Text>
        
      </Section>

      <Section title="Estágio">
        <Text style={styles.paragraph}>
          NUTES - Núcleo de Telessaúde do HC/UFPE{'\n'}
          Recife, PE — 2023.1 a 2023.2
        </Text>
      </Section>

      <Section title="Serviço Comunitário">
        <Text style={styles.paragraph}>
          Jogos Lúdicos para Idosos{'\n'}
          Projeto realizado pela UNICAP em parceria com o Instituto Social das Medianeiras da Paz
          (ISMEP), atendendo cerca de 40 idosas no Bairro do Pina.{'\n'}
          Objetivo: estimular a memória e o raciocínio com jogos lúdicos.{'\n'}
          Período: 2023.2 a 2024
        </Text>
      </Section>

      <Section title="Projetos">
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://github.com/danilot1?tab=repositories')}
        >
          GitHub: @danilot1
        </Text>
      </Section>

      <Section title="Contato">
        <Text style={styles.paragraph}>Email: dantecarvalho2803@gmail.com</Text>
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL(
              'https://www.linkedin.com/in/danilo-teixeira-de-carvalho-b0394a241/'
            )
          }
        >
          LinkedIn
        </Text>
      </Section>

      <Text style={styles.footer}>&copy; 2025 Danilo Teixeira</Text>
    </ScrollView>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>{title}</Text>
      {children}
    </View>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return <Text style={styles.bullet}>• {children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    flex: 1,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#222',
  },
  bullet: {
    fontSize: 16,
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 8,
    fontSize: 16,
  },
  footer: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 14,
    color: '#888',
  },
});