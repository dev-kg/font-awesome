import React from "react"
import { icons } from "@/icons"

import { IconProps, IconFn } from "./model"

export function Icon(props: IconProps): JSX.Element | never {
  const { type = "light", name, onClick } = props
  const Svg: IconFn = icons[`fa${type.charAt(0)}-${name}`]
  if (Svg) {
    return (
      <div onClick={onClick} className={`fa-icon fa${type.charAt(0)}-${name} clickable in-svg:h-full`}>
        <Svg />
      </div>
    )
  } else {
    throw new Error(`type this in the command line: "yarn add-fa fa${type.charAt(0)}-${name}"`)
  }
}
