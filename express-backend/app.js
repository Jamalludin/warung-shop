import express from 'express'
import createError from 'http-errors'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import dotenv from 'dotenv'

import indexRouter from '../express-backend/router/index.js'

dotenv.config()

const app = express()
app.use(logger(process.env.NODE_ENV||'dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.use('/', indexRouter)

app.use(function(req, res, next) {
    next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})


export default app