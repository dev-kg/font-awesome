import React from "react"
import { icons } from "@/icons"

import { IconType, IconProps, IconFn } from "./model"
import { IconStyled } from "./IconStyled"

export function Icon<Type extends IconType>(props: IconProps<Type>): JSX.Element {
  const { type = "light", name } = props
  const Svg: IconFn = icons[`fa${type.charAt(0)}-${name}`]
  if (Svg) {
    return (
      <IconStyled className={`fa${type.charAt(0)}-${name}`}>
        <Svg />
      </IconStyled>
    )
  } else {
    throw new Error(`type this in the command line: "yarn add-fa fa${type.charAt(0)}-${name}"`)
  }
}