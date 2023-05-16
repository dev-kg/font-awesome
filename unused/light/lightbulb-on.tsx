import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M41.8 334.14a7.998 7.998 0 0 0-2.93 10.93l8 13.86a7.998 7.998 0 0 0 10.93 2.93l99.22-57.28c-6.7-8.47-12.78-17.29-18.01-26.55L41.8 334.14zM112.33 176H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h106.52c-1.63-10.52-2.17-21.23-2.19-32zM41.8 49.85l85.16 49.17c3.97-10.01 8.72-19.58 14.17-28.77L57.8 22.14a7.998 7.998 0 0 0-10.93 2.93l-8 13.86c-2.21 3.82-.9 8.71 2.93 10.92zm556.4 0a7.998 7.998 0 0 0 2.93-10.93l-8-13.86a7.998 7.998 0 0 0-10.93-2.93l-83.38 48.14C504.26 79.44 509.06 89 513.06 99l85.14-49.15zM632 176H528c0 10.8-1.25 21.45-2.9 32H632c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm-33.8 158.14l-97.39-56.23c-5.25 9.3-11.45 18.03-18.13 26.48l99.52 57.46c3.83 2.21 8.72.9 10.93-2.93l8-13.86c2.21-3.82.9-8.71-2.93-10.92zM320 64c-61.75 0-112 50.25-112 112 0 8.84 7.16 16 16 16s16-7.16 16-16c0-44.11 35.88-80 80-80 8.84 0 16-7.16 16-16 0-8.85-7.16-16-16-16zm0-64C217.05 0 143.88 83.54 144 176.24c.06 44.28 16.5 84.67 43.56 115.54 25.65 29.26 50.29 76.91 52.44 92.22l.06 75.18c0 3.15.94 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84L400 384c2.26-15.72 26.99-63.19 52.44-92.22C479.55 260.85 496 220.37 496 176 496 78.8 417.2 0 320 0zm47.94 454.31L350.85 480h-61.71l-17.09-25.69-.01-6.31h95.9v6.31zm.04-38.31h-95.97l-.07-32h96.08l-.04 32zm60.4-145.32c-13.99 15.96-36.33 48.1-50.58 81.31H262.21c-14.26-33.22-36.59-65.35-50.58-81.31-23.13-26.38-35.5-59.84-35.58-94.68C175.87 99.01 236.43 32 320 32c79.4 0 144 64.6 144 144 0 34.85-12.65 68.48-35.62 94.68z"/>
        </svg>
    )
}

export default Icon
