import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M634.1 260.56l-15.4-4.27a8 8 0 0 0-9.77 5.33C592.08 317.9 521.8 448 464 448c-57.47 0-93.81-100.38-129-197.45C296.16 143.11 255.94 32 176 32 87.29 32 13.05 198.62.33 241.55a7.92 7.92 0 0 0 5.57 9.89l15.4 4.26a7.93 7.93 0 0 0 9.77-5.32C47.92 194.1 118.2 64 176 64c57.47 0 93.81 100.38 129 197.45C343.84 368.89 384.06 480 464 480c88.71 0 163-166.62 175.67-209.55a7.92 7.92 0 0 0-5.57-9.89z"/>
        </svg>
    )
}

export default Icon
