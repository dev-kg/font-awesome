import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M128 41.522C91.867.049 43.399-.377 11.818.076 5.26.17 0 5.516 0 12.075v23.609c0 6.641 5.393 12.037 12.034 12C39.464 47.528 104 52.257 104 104v128H68c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h36v128c0 51.494-62.335 55.801-92.092 55.985C5.314 464.026 0 469.39 0 475.984v23.943c0 6.558 5.258 11.903 11.815 11.999 31.535.46 80.027.054 116.185-41.448 36.132 41.473 84.601 41.899 116.182 41.446 6.558-.094 11.818-5.44 11.818-11.999v-23.608c0-6.641-5.393-12.037-12.034-12C216.538 464.47 152 459.731 152 408V280h36c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-36V104c0-51.514 62.301-55.805 92.092-55.985C250.686 47.975 256 42.61 256 36.016V12.073C256 5.515 250.742.17 244.185.074 212.65-.386 164.157.02 128 41.522z"/>
        </svg>
    )
}

export default Icon
