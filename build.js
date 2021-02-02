var ncp = require('ncp').ncp
async function copyFiles(from, to) {
  console.info(`Copy files from ${from} to ${to}`)
  return new Promise((resolve, reject) => {
    ncp(from, to, function (err) {
      if (err) reject(err)
      else resolve()
    })
  })
}

async function build () {
  await copyFiles("./node_modules/src", "./client/src/fontAwesome")
  await copyFiles("./node_modules/icons", "./client/src/icons")
}
build()