import React from "react"

import { IconType, IconProps, IconFn } from "./model"
import { IconStyled } from "./IconStyled"
import { copyToFontAwesomeDirectory } from "./functions"
import { icons } from "@/icons"

export function Icon<Type extends IconType>(props: IconProps<Type>): JSX.Element | null {
  const { iconType, iconName } = props
  let Svg: IconFn = icons[`${iconType}-${iconName}`]
  if (Svg) {
    return (
      <IconStyled>
        <Svg />
      </IconStyled>
    )
  } else {
    copyToFontAwesomeDirectory(iconType, iconName)
    return null
  }
}