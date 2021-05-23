// Use an enum as a safety mechanism
// e.g. not being able to filter because of typos.
// Also helps with preventing duplicates
// w/ different names (e.g. Category "Running" and "Marathon")
// Assigning strings helps making translations
// a lot more easier. Also, you're forced to translate
// new categories right away.
export enum Category {
  SPORT = 'sport',
  SHOES = 'shoes',
  RUNNING = 'running',
  HEADSET = 'headset',
  BLUETOOTH = 'bluetooth',
  WATCH = 'watch'
}
