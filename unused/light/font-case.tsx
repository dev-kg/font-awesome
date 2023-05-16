import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M632 160h-16a8 8 0 0 0-8 8v36.14C584.54 177.3 550.45 160 512 160a128 128 0 0 0-128 128v32a128 128 0 0 0 128 128c38.45 0 72.54-17.3 96-44.14V440a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V168a8 8 0 0 0-8-8zm-24 160a96 96 0 0 1-192 0v-32a96 96 0 0 1 192 0zM200.57 73.86A16 16 0 0 0 185.79 64h-19.58a16 16 0 0 0-14.77 9.86L.57 436.93A8 8 0 0 0 8 448h17.29a8 8 0 0 0 7.39-4.93L83.82 320h184.37l51.13 123.07a8 8 0 0 0 7.39 4.93h17.34a8 8 0 0 0 7.39-11.07zM97.11 288L176 98.16 254.89 288z"/>
        </svg>
    )
}

export default Icon
