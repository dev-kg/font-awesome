import React from "react"

import { IconType, IconProps, IconFn } from "./model"
import { IconStyled } from "./IconStyled"
import { copyToFontAwesomeDirectory, createFontAwesomeDirectory } from "./functions"
const icons = {}
try {
  // @ts-ignore
  import * as icons from "../../../src/fontAwesome"
} catch(err) {
  createFontAwesomeDirectory()
}
export function Icon<Type extends IconType>(props: IconProps<Type>): JSX.Element | null {
  const { iconType, iconName } = props
  let Svg: IconFn = icons[`${iconType}-${iconName}.tsx`]
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