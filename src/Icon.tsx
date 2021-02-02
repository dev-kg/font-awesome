import React from "react"
import { icons } from "@/icons"

import { IconType, IconProps, IconFn } from "./model"
import { IconStyled } from "./IconStyled"
import { copyToFontAwesomeDirectory } from "./functions"

export function Icon<Type extends IconType>(props: IconProps<Type>): JSX.Element | null {
  const { type = "light", name } = props
  const Svg: IconFn = icons[`fa${type.charAt(0)}-${name}`]
  if (Svg) {
    return (
      <IconStyled className={`fa${type.charAt(0)}-${name}`}>
        <Svg />
      </IconStyled>
    )
  } else {
    copyToFontAwesomeDirectory(type, name)
    return null
  }
}