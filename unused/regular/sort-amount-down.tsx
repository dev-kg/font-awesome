import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M304 376h-64a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm-140 8h-44V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v336H28a12 12 0 0 0-8.73 20.24l68 72a12 12 0 0 0 17.44 0l68-72A12 12 0 0 0 164 384zm268-200H240a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm64-96H240a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zM368 280H240a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z"/>
        </svg>
    )
}

export default Icon
