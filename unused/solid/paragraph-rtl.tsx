import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M368 384H112v-48c0-14.25-17.23-21.39-27.31-11.31l-80 80a16 16 0 0 0 0 22.62l80 80C94 516.64 112 511.64 112 496v-48h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM144 224h16v80a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V64h32v240a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V64h16a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H144C80 0 32 48 32 112s48 112 112 112z"/>
        </svg>
    )
}

export default Icon
