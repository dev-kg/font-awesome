import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M336 128H224V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v112H48c-26.51 0-48 21.49-48 48s21.49 48 48 48c20.87 0 38.45-13.4 45.06-32h197.88c6.61 18.6 24.19 32 45.06 32 26.51 0 48-21.49 48-48s-21.49-48-48-48zM128 428.84l50.69 76.03c6.33 9.5 20.29 9.5 26.63 0L256 428.84V224H128v204.84z"/>
        </svg>
    )
}

export default Icon
