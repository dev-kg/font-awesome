import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M144 320c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm0-128c26.47 0 48 21.53 48 48s-21.53 48-48 48-48-21.53-48-48 21.53-48 48-48zm384-32H272c-8.84 0-16 7.16-16 16v176H32V72c0-4.42-3.58-8-8-8H8c-4.42 0-8 3.58-8 8v368c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-56h576v56c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V272c0-61.86-50.14-112-112-112zm80 192H288V192h240c44.11 0 80 35.89 80 80v80z"/>
        </svg>
    )
}

export default Icon
