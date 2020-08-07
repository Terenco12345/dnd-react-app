module.exports = {
    jwt: {
        secret: process.env.JWT_SECRET,
        options: {
            expiresIn: '1h',
        },
        cookie: {
            maxAge: 864000000,
            httpOnly: true,
            sameSite: 'none',
            signed: true,
            secure: true,
            overwrite: true
        }
    }
}