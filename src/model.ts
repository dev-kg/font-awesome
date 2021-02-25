import { SVGAttributes } from "react"

export type IconType = "brands" | "light" | "regular" | "solid"

export interface IconProps {
  type?: IconType
  name: string
  onClick?: (evt: React.MouseEvent<HTMLDivElement>) => void
  svgProps?: Partial<SVGAttributes<{}>>
}
export type IconFn = (props: SVGAttributes<{}>) => JSX.Element
 
