import { center, clickable } from "@/styles/mixins"
import styled from "styled-components"

export const IconStyled = styled.div`
  ${clickable}
  ${center}
  svg {
    width: 100%;
    height: 100%;
  }
`
