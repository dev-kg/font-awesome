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
  try {
    await copyFiles("./node_modules/font-awesome/src", "./src/components/Icon")
    await copyFiles("./node_modules/font-awesome/icons", "./src/icons")
  } catch(err) {
    console.log(err)
  }
}
build()