/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        URL: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla&limit=8',
        X_RAPIDAPI_KEY: '5cd6d7215bmsh5dcea764a05ee20p1ac13ejsnbe236c43938c',
        X_RAPIDAPI_HOST: 'cars-by-api-ninjas.p.rapidapi.com',
      },
}

module.exports = nextConfig
