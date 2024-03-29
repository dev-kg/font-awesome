import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M636.73 235.05l-12.91-9.47a8 8 0 0 0-11.18 1.72L464.38 436.44 189.16 38.93A16 16 0 0 0 176.22 32c-6.22-.43-10 2.38-13.13 6.54L1.55 265.82A8 8 0 0 0 3.27 277l12.91 9.47a8 8 0 0 0 11.18-1.72L175.62 75.6l275.22 397.51a16 16 0 0 0 12.94 6.89h.22a16 16 0 0 0 12.91-6.53l161.54-227.24a8 8 0 0 0-1.72-11.18z"/>
        </svg>
    )
}

export default Icon
