import { Audio } from 'expo-av'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface SoundProviderProps {
  children: ReactNode
}

type SoundContextData = {
  effectsVolume: number
  isSoundMuted: boolean
  musicVolume: number
  handleMute: () => void
  playEffectCorrect: () => void
  playEffectPress: () => void
  playEffectWrong: () => void
  setEffectsVolume: (effectsVolume: number) => void
  setMusicVolume: (musicVolume: number) => void
}

type Effect = 'correct' | 'press' | 'wrong'
const SoundContext = createContext({} as SoundContextData)

export function SoundProvider({ children }: SoundProviderProps) {
  const [effectsVolume, setEffectsVolume] = useState<number>(1)
  const [bgMusic, setBgMusic] = useState<Audio.Sound>()
  const [musicVolume, setMusicVolume] = useState<number>(1)
  const [isSoundMuted, setIsSoundMuted] = useState(false)

  function handleBgMusic() {
    if (bgMusic) {
      bgMusic.setVolumeAsync(musicVolume)
    }
  }

  function handleMute() {
    setIsSoundMuted(!isSoundMuted)

    if (bgMusic) {
      bgMusic.setIsMutedAsync(!isSoundMuted)
    }
  }

  async function playEffectPress() {
    if (!isSoundMuted) {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/sounds/press.wav'),
        {
          volume: effectsVolume,
          shouldPlay: true,
        }
      )

      sound.setPositionAsync(0)
      await sound.playAsync()
    }
  }

  async function playEffectCorrect() {
    if (!isSoundMuted) {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/sounds/correct.wav'),
        {
          volume: effectsVolume,
          shouldPlay: true,
        }
      )

      sound.setPositionAsync(0)
      await sound.playAsync()
    }
  }

  async function playEffectWrong() {
    if (!isSoundMuted) {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/sounds/wrong.wav'),
        {
          volume: effectsVolume,
          shouldPlay: true,
        }
      )

      sound.setPositionAsync(0)
      await sound.playAsync()
    }
  }

  useEffect(() => {
    ;(async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/sounds/bgmusic.mp3'),
        {
          volume: musicVolume,
          shouldPlay: true,
          isLooping: true,
        }
      )

      setBgMusic(sound)

      sound.setPositionAsync(0)
      await sound.playAsync()
    })()
  }, [])

  useEffect(() => {
    handleBgMusic()
  }, [musicVolume])

  return (
    <SoundContext.Provider
      value={{
        effectsVolume,
        isSoundMuted,
        musicVolume,
        handleMute,
        playEffectCorrect,
        playEffectPress,
        playEffectWrong,
        setEffectsVolume,
        setMusicVolume,
      }}
    >
      {children}
    </SoundContext.Provider>
  )
}

export const useSound = () => useContext(SoundContext)
