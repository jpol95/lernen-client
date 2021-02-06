const tests = {name: "Johnson", greed: "skill"}

const tests2 = undefined

console.log({...(tests2 || tests)})