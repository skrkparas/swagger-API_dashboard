const {tag, swaggerDocs} = require('../swaggerdoc')
console.log(" this is the docs", swaggerDocs)
const user = {
    '/user' : {
        get : {
            tags : [tag.user],
            description: " this is user welcome page",
            responses: {
                200 : {
                    description: "ok",
                    content: {
                        "application/json":{
                            schema: {
                                type: "string"
                            }
                        }
                    }
                }
            }
        }
    }
}

module.exports = {
    usermain : user
}