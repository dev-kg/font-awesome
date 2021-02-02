import fs from "fs"

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
    else resolve(undefined)
    })
})
}

function ToCamelCase(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase()
      })
      .replace(/\s+/g, "").split("-").join("")
}

export async function createFontAwesomeDirectory() {
    await fs.mkdir("../src/fontAwesome", undefined as any)
    writeFile("../src/fontAwesome/index.ts", "")
}

export async function copyToFontAwesomeDirectory(type, name) {
    const file = await readFile(`./src/${type}/${name}`)
    const indexFile = await readFile("../src/fontAwesome/index.ts")
    const newIndexFile = `${indexFile}
export { default as ${ToCamelCase(`${type}-${name}`)} } from "./${type}-${name}.tsx"
`
    writeFile(`../src/fontAwesome/${type}-${name}.tsx`, file)
    writeFile("../src/fontAwesome/index.ts", newIndexFile)
}