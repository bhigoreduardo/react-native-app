import { useCallback } from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import * as SplashScrenn from 'expo-splash-screen'

SplashScrenn.preventAutoHideAsync()

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../src/assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../src/assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../src/assets/fonts/DMSans-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScrenn.hideAsync()
  }, [fontsLoaded])

  if (!fontsLoaded) return  null

  return (<Stack onLayout={onLayoutRootView} />)
}
export default Layout