class Formatter {
  static capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  static sanitize(f) {
    const chars = []
    f.split('').forEach((char) => {
      if (!['@', '#', '!', '$', '%', '^', '{', '}', '*', '(', ')'].includes(char) || ["'"].includes(char)) {
        chars.push(char)
      }
    })

    return chars.join('')
  }
  static titleize(sent) {
    const words = []
    sent.split(' ').forEach((word, index) => {
      if (index === 0 || !['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'].includes(word)) {
        words.push(this.capitalize(word))
      } else {
        words.push(word)
      }
    })

    return words.join(' ')
  }


}