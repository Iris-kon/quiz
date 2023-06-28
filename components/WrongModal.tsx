import { useRouter } from 'expo-router'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSound } from '../context/SoundContext'

export function WrongModal() {
  const router = useRouter()
  const { playEffectPress } = useSound()

  function backToMenu() {
    playEffectPress()
    router.push('/')
  }

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>You are Wrong!</Text>

          <TouchableOpacity onPress={backToMenu} style={styles.option}>
            <Text style={styles.optionText}>Back to menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    height: 150,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 28,
    textAlign: 'center',
  },
  option: {
    marginTop: 20,
    borderColor: '#000',
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
    color: '#000',
  },
})
