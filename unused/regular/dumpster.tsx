import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M560 160c10.4 0 18-9.8 15.5-19.9l-24-96C549.7 37 543.3 32 536 32h-98.9l25.6 128H560zM404.5 32H304v128h126.1L404.5 32zM560 224h-20l4-32H32l4 32H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h26l22 176v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h320v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16l22-176h26c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-90.4 176H106.4l-20-160h403.3l-20.1 160zM16 160h97.3l25.6-128H40c-7.3 0-13.7 5-15.5 12.1l-24 96C-2 150.2 5.6 160 16 160zM272 32H171.5l-25.6 128H272V32z"/>
        </svg>
    )
}

export default Icon
