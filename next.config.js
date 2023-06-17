/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        Url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla&limit=8',
        X_RapidAPI_Key: '5cd6d7215bmsh5dcea764a05ee20p1ac13ejsnbe236c43938c',
        X_RapidAPI_Host: 'cars-by-api-ninjas.p.rapidapi.com',
      },
}

module.exports = nextConfig
