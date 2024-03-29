import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M416 392.88V96a96 96 0 0 0-96-96H190.66A95.62 95.62 0 0 0 96 80L.24 487.77a16 16 0 0 0 13 18.51l31.54 5.48a16 16 0 0 0 18.5-13L127.81 224H352v168.88a64 64 0 1 0 64 0zM352 160H142.83l16.26-69.25A31.91 31.91 0 0 1 190.66 64H320a32 32 0 0 1 32 32zm32 304a16 16 0 1 1 16-16 16 16 0 0 1-16 16z"/>
        </svg>
    )
}

export default Icon
