import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const MeuComponente = () => {
  const onPressButton = () => {
    Alert.alert('Parabéns!\nVocê acertou o botão');
  };

  return (
    <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Pressione-me"
        onPress={onPressButton}
      />
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Minha linha de código com React Native</Text>
      <Text>Auridebson</Text>
      <MeuComponente />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10
  },
});
