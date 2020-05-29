module.exports = {
    jwt: {
        secret: 'my_ass',
        options: {
            expiresIn: '1h',
        },
        cookie: {
            maxAge: 86400000,
            httpOnly: true,
            sameSite: false,
            signed: true,
            secure: false,
            overwrite: true
        }
    }
}