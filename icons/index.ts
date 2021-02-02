//@ts-ignore
const allJSfilesInFolder = require.context('./', true, /\.(tsx)$/)

export const icons = allJSfilesInFolder.keys().reduce((list, file) => {
  if (file === './index.ts') return list
  list[file.slice(2, -4)] = allJSfilesInFolder(file)
  return list
}, {})