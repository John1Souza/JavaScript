let num = [5, 8, 2, 9, 3]

num[3] = 6
num.push(7)
num.length
num.sort()

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Novo vetor é o ${num}`)

let pos = num.indexOf(8)

console.log(`O valor está na posição ${pos}`)