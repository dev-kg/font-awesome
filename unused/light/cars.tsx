import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M241.85 256H46.22A14.24 14.24 0 0 1 32 241.78v-55.11A42.72 42.72 0 0 1 74.67 144h266.66c.29 0 .53.16.81.16.65 0 1.27-.16 1.93-.16h58.14a75.19 75.19 0 0 0-30.81-25.56l-15.88-68.83A63.71 63.71 0 0 0 293.16 0H120.07a63.7 63.7 0 0 0-62.36 49.61l-16.28 70.55C17 132.44 0 157.49 0 186.67v55.11a46.14 46.14 0 0 0 32 43.75V320a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16v-32h143.65c4.31-4.29 8.57-8.65 13.64-12.21zM88.89 56.81A32 32 0 0 1 120.07 32h173.09a32 32 0 0 1 31.18 24.81L337.07 112H76.15zM64 196a20 20 0 1 0 20-20 20 20 0 0 0-20 20zm244 156a20 20 0 1 0 20 20 20 20 0 0 0-20-20zm248 0a20 20 0 1 0 20 20 20 20 0 0 0-20-20zm39.4-57.56l-15.88-68.83A63.71 63.71 0 0 0 517.16 176H344.07a63.7 63.7 0 0 0-62.36 49.61l-16.28 70.55C241 308.44 224 333.49 224 362.67v55.11a46.14 46.14 0 0 0 32 43.75V496a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16v-32h256v32a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16v-34.47a46.14 46.14 0 0 0 32-43.75v-55.11a74.7 74.7 0 0 0-44.6-68.23zm-282.51-61.63A32 32 0 0 1 344.07 208h173.09a32 32 0 0 1 31.18 24.81L561.07 288H300.15zM608 417.78A14.24 14.24 0 0 1 593.78 432H270.22A14.24 14.24 0 0 1 256 417.78v-55.11A42.72 42.72 0 0 1 298.67 320h266.66A42.72 42.72 0 0 1 608 362.67z"/>
        </svg>
    )
}

export default Icon
