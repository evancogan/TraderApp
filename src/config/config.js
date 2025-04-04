module.exports = {
    app: {
        port: process.env.PORT || 3000,
        env: process.env.NODE_ENV || 'development'
    },
    database: {
        url: process.env.DATABASE_URL
    },
    trading: {
        apiKey: process.env.TRADING_API_KEY,
        apiSecret: process.env.TRADING_API_SECRET
    }
};