import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M372 144H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h148v260c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V208h148c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm0-112H12C5.4 32 0 37.4 0 44v40c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12z"/>
        </svg>
    )
}

export default Icon
