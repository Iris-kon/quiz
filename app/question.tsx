import { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { CorrectModal } from '../components/CorrectModal'
import { WrongModal } from '../components/WrongModal'
import { useSound } from '../context/SoundContext'

export default function Questions() {
  const { playEffectCorrect, playEffectWrong } = useSound()
  const [isModalOpen, setModalOpen] = useState('')

  function handleCorrect() {
    playEffectCorrect()
    setModalOpen('correct')
  }

  function handleWrong() {
    playEffectWrong()
    setModalOpen('wrong')
  }

  return (
    <SafeAreaView style={styles.questionsContainer}>
      <View style={styles.questionHeader}>
        <Text style={styles.questionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
          facilisis erat. Sed vehicula facilisis nulla a interdum. Quisque
          gravida enim eget fringilla venenatis?
        </Text>
      </View>
      <TouchableOpacity onPress={handleCorrect} style={styles.option}>
        <Text style={styles.optionText}>Correct answer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleWrong} style={styles.option}>
        <Text style={styles.optionText}>Wrong answer</Text>
      </TouchableOpacity>
      {isModalOpen === 'correct' ? <CorrectModal /> : null}
      {isModalOpen === 'wrong' ? <WrongModal /> : null}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  questionsContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#3c4454',
  },
  questionHeader: {
    marginTop: 40,
    borderWidth: 2,
    padding: 20,
    borderRadius: 8,
    width: '90%',
    borderColor: '#fff',
    backgroundColor: 'transparent',
  },
  questionText: {
    color: '#fff',
    fontSize: 28,
  },
  option: {
    marginTop: 20,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    height: 35,
    paddingVertical: 2,
    width: '90%',
  },
  optionText: {
    fontSize: 18,
    color: '#fff',
  },
})
