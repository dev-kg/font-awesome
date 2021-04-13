import { center, clickable } from "@/styles/mixins"
import styled from "styled-components"

export const IconStyled = styled.div`
  ${clickable}
  ${center}
  svg {
    height: 100%;
  }
`
