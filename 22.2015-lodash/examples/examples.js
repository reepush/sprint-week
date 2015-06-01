a = [1, 2, 3, 1]
b = ['a', 'b', 'c']
c = { a: 'a', b: 'b', c: 'c' }
d = [
    { name: 'Z01', status: 'active' },
    { name: 'B21', status: 'active' },
    { name: 'M07', status: 'active' },
    { name: 'Y63', status: 'passive' },
]

result = _.sample(a, 2)

console.log(JSON.stringify(result, null, 2))