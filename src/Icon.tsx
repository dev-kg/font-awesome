import React from "react"

import * as brands from "./brands"
import * as light from "./light"
import * as regular from "./regular"
import * as solid from "./solid"
import { IconType, IconProps, IconFn } from "./model"
import { IconStyled } from "./IconStyled"

export function Icon<Type extends IconType>(props: IconProps<Type>): JSX.Element {
  const { iconType, iconName } = props
  let Svg: IconFn
  switch (iconType) {
    case "brands":
      Svg = brands[iconName as keyof typeof brands]
      break
    case "light":
      Svg = light[iconName as keyof typeof light]
      break
    case "solid":
      Svg = solid[iconName as keyof typeof solid]
      break
    case "regular":
      Svg = regular[iconName as keyof typeof regular]
      break
    default:
      Svg = light[iconName as keyof typeof light]
      break
  }
  return (
    <IconStyled>
      <Svg />
    </IconStyled>
  )
}