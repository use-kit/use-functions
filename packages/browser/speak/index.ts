export const speak = (
  text: string,
  lang = 'en-US',
  rate = 1.0,
  pitch = 1.0,
  volume = 1.0) => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = lang
      utterance.rate = rate
      utterance.pitch = pitch
      utterance.volume = volume
      window.speechSynthesis.speak(utterance)
      return true
    }
    catch (error) {
      return false
    }
  }
  else {
    console.warn('Speech synthesis is not supported in this environment.')
    return false
  }
}
