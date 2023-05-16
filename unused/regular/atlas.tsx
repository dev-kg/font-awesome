import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M224 320c66.28 0 120-53.73 120-120 0-66.28-53.72-120-120-120-66.27 0-120 53.72-120 120 0 66.27 53.73 120 120 120zm86.38-136h-34.59c-1.39-23.68-5.75-44.99-12.27-62.19 24.05 12.21 41.81 34.87 46.86 62.19zm-34.59 32h34.59c-5.05 27.32-22.82 49.98-46.86 62.19 6.53-17.21 10.88-38.51 12.27-62.19zM224 114.24c6.91 8.37 17.51 32.39 19.96 69.76h-39.93c2.46-37.37 13.06-61.39 19.97-69.76zM243.96 216c-2.45 37.37-13.05 61.39-19.96 69.76-6.91-8.37-17.51-32.39-19.96-69.76h39.92zm-59.49-94.19c-6.52 17.2-10.87 38.51-12.27 62.19h-34.59c5.06-27.32 22.82-49.98 46.86-62.19zM172.21 216c1.4 23.68 5.75 44.98 12.27 62.19-24.04-12.21-41.8-34.87-46.86-62.19h34.59zM448 384V16c0-8.8-7.2-16-16-16H80C35.8 0 0 35.8 0 80v352c0 44.2 35.8 80 80 80h352c8.8 0 16-7.2 16-16v-16c0-7.8-5.6-14.3-12.9-15.7-4.2-13-4.2-51.6 0-64.6 7.4-1.5 12.9-7.9 12.9-15.7zm-54 80H80c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h314c-2.7 17.3-2.7 46.7 0 64zm6-112H80c-11.4 0-22.2 2.4-32 6.7V80c0-17.7 14.3-32 32-32h320v304z"/>
        </svg>
    )
}

export default Icon
