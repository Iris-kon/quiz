import { Slot } from 'expo-router'
import { SoundProvider } from '../context/SoundContext'

export default function Root() {
  return (
    // Setup the auth context and render our layout inside of it.
    <SoundProvider>
      <Slot />
    </SoundProvider>
  )
}
