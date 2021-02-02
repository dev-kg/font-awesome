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

export async function copyToFontAwesomeDirectory(type, name) {
    const file = await readFile(`./src/${type}/${name}`)
    writeFile(`./client/src/icons/${type}-${name}.tsx`, file)
}