import fs from "fs"

import { Brands, IconType, Light, Regular, Solid } from "./model"

async function readFile(path: string): Promise<string> {
  return new Promise((resolve: (value: string) => void, reject: (error: NodeJS.ErrnoException) => void) => {
    fs.readFile(path, 'utf-8', (err: NodeJS.ErrnoException | null, str: string) => {
      if (err) {
        reject(err)
      } else {
        resolve(str)
      }
    })
  })
}

async function writeFile(path: string, data: string): Promise<undefined> {
  return new Promise((resolve: (value: undefined) => void, reject: (error: NodeJS.ErrnoException) => void) => {
    fs.writeFile(path, data, 'utf-8', (err: NodeJS.ErrnoException | null) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(undefined)
      }
    })
  })
}

export async function copyToFontAwesomeDirectory(type: IconType, name: Brands | Light | Regular | Solid): Promise<undefined> {
  const file = await readFile(`./src/${type}/${name}.tsx`)
  return writeFile(`./src/icons/fa${type.charAt(0)}-${name}.tsx`, file)
}