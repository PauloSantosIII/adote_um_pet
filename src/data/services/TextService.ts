export const TextService = {
  limitTextSize(text: string, sizeMax: number): string {
    if (text.length < sizeMax) {
      return text
    }
    return text.slice(0, sizeMax) + '...'
  }
}