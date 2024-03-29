import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M221.5 91.08l.37-.17A111.93 111.93 0 0 0 0 112v400h128V260.54a64.35 64.35 0 0 1 6.76-28.63l55.48-111a64.12 64.12 0 0 1 31.26-29.83zm351.12 155.14l-55.49-111a32 32 0 0 0-15.62-14.93L381 66.76a32 32 0 0 0-26 0l-120.51 53.56a32 32 0 0 0-15.62 14.93l-55.49 111a32.08 32.08 0 0 0-3.38 14.29V512h128v-96h160v96h128V260.54a32.08 32.08 0 0 0-3.38-14.32zM416 320h-96v-96h96z"/>
        </svg>
    )
}

export default Icon
