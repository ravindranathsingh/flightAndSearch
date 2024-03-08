const ClientErrorCode = Object.freeze({
    BAD_REQUEST : 400,
    UNAUTHORISED : 401,
    NOT_FOUND : 404
})


const ServerErrorCode = Object.freeze({
    INTERNAL_SERVER_ERROR : 500,
    NOT_IMPLEMENTED : 501,
})

const SuccessCode = Object.freeze({
    CREATED : 201,
    OK : 200

})

module.exports = { ClientErrorCode, ServerErrorCode, SuccessCode }