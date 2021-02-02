var fs = require('fs')
var svgtojsx = require('svg-to-jsx')

async function getFileList(path) {
    console.info(`get files in ${path}`)
    return new Promise((resolve, reject) => {
      fs.readdir(path, (err, files) => {
        if (err) reject(err)
        else resolve(files)
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

async function build () {
    const folderList = ["brands", "light", "regular", "solid"]
    const model = await Promise.all(folderList.map(async (folder) => {
        const fileList = await getFileList(`./src/${folder}`)
        const list = fileList.map((file) => `"${file.replace(".tsx", "")}"`)
        return `export type ${folder.charAt(0).toUpperCase()}${folder.slice(1)} = ${list.join(`
| `)}
`
    }))
    writeFile("./src/model.new.ts", model.join(""))
}
build()