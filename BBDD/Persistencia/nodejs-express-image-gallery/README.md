# req.cookies

When using cookie-parser middleware, this property is an object that contains cookies sent by the request. If the request contains no cookies, it defaults to {}.

NPM: [https://www.npmjs.com/package/cookie-parser]

GITHUB: [https://github.com/expressjs/cookie-parser]

`npm install cookie-parser`

`var cookieParser = require('cookie-parser');`

`app.use(cookieParser());`

# cookieParser

### Secret value 

If you set signed:true option, you have to set secret key as string as parameter for cookieParser() as follows:

`app.use(cookieParser('MY SECRET'))`
`res.cookie('cookie1', 'This is my first cookie', { signed : true });`

`console.dir(req.cookies.name)`


es.cookie(name, value [, options])
Sets cookie name to value. The value parameter may be a string or object converted to JSON.

## The options parameter is an object that can have the following properties.

| Property | Type              | Description                                                                                                                                         |     |     |
| -------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| domain   | String            | Domain name for the cookie. Defaults to the domain name of the app.                                                                                 |     |     |
| encode   | Function          | A synchronous function used for cookie value encoding. Defaults to encodeURIComponent.                                                              |     |     |
| expires  | Date              | Expiry date of the cookie in GMT. If not specified or set to 0, creates a session cookie.                                                           |     |     |
| httpOnly | Boolean           | Flags the cookie to be accessible only by the web server.                                                                                           |     |     |
| maxAge   | Number            | Convenient option for setting the expiry time relative to the current time in milliseconds.                                                         |     |     |
| path     | String            | Path for the cookie. Defaults to “/”.                                                                                                               |     |     |
| secure   | Boolean           | Marks the cookie to be used with HTTPS only.                                                                                                        |     |     |
| signed   | Boolean           | Indicates if the cookie should be signed.                                                                                                           |     |     |
| sameSite | Boolean or String | Value of the “SameSite” Set-Cookie attribute. More information at https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00#section-4.1.1. |     |     |
