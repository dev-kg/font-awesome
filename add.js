var fs = require('fs')

async function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, str) => {
      if (err) reject(err)
      else resolve(str)
    })
  })
}

async function writeFile(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf-8', (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
}

 async function add() {
  const faTag = process.argv[2]
  const t = faTag.charAt(2)
  const type = t === "b" ? "brands" : t === "r" ? "regular" : t ==="l" ? "light"  : "solid"
  const name = faTag.replace(`fa${t}-` , "")
  const file = await readFile(`./src/${type}/${name}.tsx`)
  return writeFile(`./src/icons/fa${t}-${name}.tsx`, file)
}

add()