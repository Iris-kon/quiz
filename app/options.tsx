import Ionicons from '@expo/vector-icons/Ionicons'
import Slider from '@react-native-community/slider'
import { useRouter } from 'expo-router'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useSound } from '../context/SoundContext'

export default function Options() {
  const router = useRouter()

  const {
    isSoundMuted,
    effectsVolume,
    handleMute,
    musicVolume,
    playEffectPress,
    setEffectsVolume,
    setMusicVolume,
  } = useSound()

  function goBackToMenu() {
    playEffectPress()
    router.back()
  }

  return (
    <SafeAreaView style={styles.optionsContainer}>
      <Text style={styles.title}>Opções</Text>
      <View>
        <Text style={styles.optionTitle}>Volume da música</Text>
        <View style={styles.volumeConfigInput}>
          <TouchableOpacity>
            <Ionicons name="volume-low-outline" color="#fff" size={30} />
          </TouchableOpacity>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={setMusicVolume}
            value={musicVolume}
          />
        </View>
      </View>

      <View>
        <Text style={styles.optionTitle}>Volume dos efeitos sonoros</Text>
        <View style={styles.volumeConfigInput}>
          <TouchableOpacity>
            <Ionicons name="volume-low-outline" color="#fff" size={30} />
          </TouchableOpacity>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={setEffectsVolume}
            value={effectsVolume}
          />
        </View>
      </View>

      <View style={styles.muteSwitcherContainer}>
        <Text style={styles.optionTitle}>Mutar sons</Text>

        <View style={styles.muteSwitcher}>
          <TouchableOpacity
            style={
              isSoundMuted === false
                ? styles.muteSwitcherOptions
                : [styles.muteSwitcherOptions, { backgroundColor: '#fff' }]
            }
            onPress={handleMute}
          >
            <Text
              style={
                isSoundMuted === false
                  ? { color: '#fff' }
                  : { color: '#3c4454' }
              }
            >
              Sim
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleMute}
            style={
              isSoundMuted === true
                ? styles.muteSwitcherOptions
                : [styles.muteSwitcherOptions, { backgroundColor: '#fff' }]
            }
          >
            <Text
              style={
                isSoundMuted === true ? { color: '#fff' } : { color: '#3c4454' }
              }
            >
              Não
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.option} onPress={goBackToMenu}>
        <Text style={styles.optionText}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  optionsContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#3c4454',
  },
  title: {
    paddingTop: 40,
    fontSize: 48,
    color: '#fff',
  },
  volumeConfigInput: {
    flexDirection: 'row',
  },
  muteSwitcherContainer: {
    gap: 10,
  },
  muteSwitcher: {
    flexDirection: 'row',
    gap: 20,
  },
  optionTitle: {
    color: '#fff',
    fontSize: 15,
  },
  muteSwitcherOptions: {
    borderColor: '#fff',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 50,
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
    width: '80%',
  },
  optionText: {
    fontSize: 18,
    color: '#fff',
  },
})
