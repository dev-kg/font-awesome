import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M608 0H338.84C192 0 64 64 0 224h552.09l-13.28 64H400a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h128.86l-32.58 157.05A16 16 0 0 0 512 512h15.45a16 16 0 0 0 15.72-13l96.27-461A32 32 0 0 0 608 0zM78.62 176C134.84 91 222.06 48 338.84 48h249.75L562 176z"/>
        </svg>
    )
}

export default Icon
