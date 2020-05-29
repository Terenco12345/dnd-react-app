module.exports = {
    jwt: {
        secret: 'my_ass',
        options: {
            expiresIn: '1h',
        },
        cookie: {
            httpOnly: true,
            sameSite: false,
            signed: true,
            secure: true
        }
    }
}