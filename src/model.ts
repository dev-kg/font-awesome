import { SVGAttributes } from "react"

import * as brands from "./brands"
import * as light from "./light"
import * as regular from "./regular"
import * as solid from "./solid"

export type IconType = "brands" | "light" | "regular" | "solid"

export interface IconProps<Type extends IconType> {
  iconType?: Type
  iconName: Type extends "brands"
  ? keyof typeof brands
  : Type extends "light"
  ? keyof typeof light
  : Type extends "regular"
  ? keyof typeof regular
  : Type extends "solid"
  ? keyof typeof solid
  : keyof typeof light
}
export type IconFn = (props: SVGAttributes<{}>) => JSX.Element