const { check, validationResult } = require("express-validator")


exports.validate = (req, res, next) => {
    const error = validationResult(req).array()
    if (!error.length) return next()

    res.status(400).json({ success: false, error: error[0].msg })
}

