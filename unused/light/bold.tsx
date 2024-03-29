import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M306 234.12c27.74-20.38 46-53.01 46-90.12A112 112 0 0 0 240 32H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v384H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h216a128 128 0 0 0 50-245.88zM96 64h144a80 80 0 0 1 0 160H96zm160 384H96V256h160a96 96 0 0 1 0 192z"/>
        </svg>
    )
}

export default Icon
