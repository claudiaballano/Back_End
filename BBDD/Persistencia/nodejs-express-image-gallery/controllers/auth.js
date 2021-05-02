
exports.getLogin = (req, res, next) => {
    
    const {cookies}=req
    const loggedIn=cookies.loggedIn

    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: loggedIn
       
    })
}

exports.postLogin = (req, res,next) => {
    
    //Any data we store here can be used as long as we are working on the same request. 
    // req.isLoggedIn = true

    // One alternative would be some kind of global variable. You could use a global variable which you store in extra file and which you export form that file and which you then change and that variable. But since that variable would be shared across all requests, it vould also be shared across all users. 

    // With cookies we can store data in the browser of that user. 

    res.cookie('loggedIn', 12345, {
        expires: new Date(Date.now() + 8 * 3600000) // cookie will be removed after 8 hours
    }) 
    
    res.redirect('/') 
}