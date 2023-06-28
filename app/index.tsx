import { useRouter } from 'expo-router'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useSound } from '../context/SoundContext'

export default function Home() {
  const router = useRouter()
  const { playEffectPress } = useSound()

  function handleButtonClick(path: string) {
    playEffectPress()

    router.push(path)
  }

  return (
    <SafeAreaView style={styles.homeContainer}>
      <Text style={styles.title}>QUIZ</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleButtonClick('question')}
        >
          <Text style={styles.optionText}>Começar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => handleButtonClick('options')}
        >
          <Text style={styles.optionText}>Opções</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3c4454',
  },
  title: {
    fontSize: 128,
    color: '#fff',
  },
  optionsContainer: {
    paddingTop: 20,
    gap: 20,
    width: '80%',
  },
  option: {
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    height: 35,
    paddingVertical: 2,
    width: '100%',
  },
  optionText: {
    fontSize: 18,
    color: '#fff',
  },
})
