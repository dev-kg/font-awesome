import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M402.22 50.47c11.29-12.19 14.43-32.03 13.22-50.22-12.88-.86-35.67-.12-50.02 13.28-16.53 16.6-13.77 46.36-13.22 50.22 18.47 1.23 37.77-1.85 50.02-13.28zM496 224h-25.49c2.76-8.11 5.17-16.56 6.74-25.82 13.63-73.34-25.2-156.03-125.56-99.88-65.68-36.75-94.55-7.64-95.74-6.72-1.19-.92-30.28-30.02-95.94 6.72C59.44 42.04 20.98 125.78 34.44 198.18c1.56 9.26 3.98 17.71 6.74 25.82H16c-8.84 0-16 7.16-16 16v256c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16V240c0-8.84-7.16-16-16-16zm-159.94-97.77l15.62 8.74 15.62-8.74c54.74-30.63 67.11-3.69 67.76-2.75 12.04 17.42 14.51 48.48 10.63 69.37-1.98 11.71-5.51 21.76-9.67 31.15h-157.2c2.76-8.11 5.18-16.56 6.74-25.82 4.26-22.9 2.52-56.47-9.98-82.12 14.81-10.61 50.82 4.76 60.48 10.17zm-259.31-2.8c.65-.94 12.87-27.84 67.63 2.8l15.62 8.74 15.62-8.74c54.74-30.63 67.11-3.69 67.76-2.75 12.04 17.42 14.51 48.48 10.63 69.37-1.98 11.71-5.51 21.77-9.67 31.15H75.66c-4.17-9.45-7.73-19.63-9.77-31.66-3.82-20.61-.81-52.02 10.86-68.91zM480 480H32v-96h448v96zm0-128H32v-96h448v96zM80 320c8.84 0 16-7.16 16-16s-7.16-16-16-16-16 7.16-16 16 7.16 16 16 16zm0 128c8.84 0 16-7.16 16-16s-7.16-16-16-16-16 7.16-16 16 7.16 16 16 16zm352-128c8.84 0 16-7.16 16-16s-7.16-16-16-16-16 7.16-16 16 7.16 16 16 16zm0 128c8.84 0 16-7.16 16-16s-7.16-16-16-16-16 7.16-16 16 7.16 16 16 16zM210.53 50.47c11.29-12.19 14.43-32.03 13.22-50.22-12.88-.86-35.67-.12-50.02 13.28-16.53 16.6-13.77 46.36-13.22 50.22 18.47 1.23 37.77-1.85 50.02-13.28z"/>
        </svg>
    )
}

export default Icon
