const spinner = ['|','/','-','\\','|','/','-', '\\', '|']
let increment = 0

for (let symbol of spinner) {
  increment += 200
  setTimeout (() => {
    process.stdout.write('\r' + symbol)
  }, increment)
}

setTimeout (() => {
  process.stdout.write('\r')
}, increment);
