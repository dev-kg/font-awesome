import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M568 32c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H8C3.6 0 0 3.6 0 8v16c0 4.4 3.6 8 8 8h24v448H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h168c8.84 0 16-7.16 16-16V320c0-52.94 43.06-96 96-96s96 43.06 96 96v160l.02 16c0 8.84 7.16 16 16 16H568c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-24V32h24zm-56 448h-96V320c0-70.58-57.41-128-128-128s-128 57.42-128 128v160H64V128h448v352zm0-384H64V32h448v64z"/>
        </svg>
    )
}

export default Icon
