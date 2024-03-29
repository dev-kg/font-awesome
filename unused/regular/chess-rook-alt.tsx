import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M313.6 435.2L288 416v-24c0-11.17-7.79-20.14-18.13-22.81l-5.34-117.63 26.73-20.15A32 32 0 0 0 304 205.86V96a32 32 0 0 0-32-32H48a32 32 0 0 0-32 32v110a32 32 0 0 0 12.78 25.58l26.69 20.05-5.34 117.6C39.79 371.86 32 380.83 32 392v24L6.4 435.2A16 16 0 0 0 0 448v48a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-48a16 16 0 0 0-6.4-12.8zM64 112h40v32h32v-32h48v32h32v-32h40v85.88l-40.53 30.56L221.55 368H98.45l6.08-139.59L64 197.94zM48 464l32-24v-24h160v24l32 24zm136-216.41a23.59 23.59 0 0 0-47.18 0V288H184z"/>
        </svg>
    )
}

export default Icon
