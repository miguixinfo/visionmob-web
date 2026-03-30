/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                onyx: '#0D0D12',
                indigo: '#1A1A2E',
                slate: '#7F77DD',
                periwinkle: '#B8B8E3',
                almond: '#EA8951',
                linen: '#F1EFE8',
                blush: '#C2668A',
                berry: '#9E3D65',
                blossom: '#F0B8CF',
            },
            fontFamily: {
                syne: ['Syne', 'sans-serif'],
                dm: ['DM Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}