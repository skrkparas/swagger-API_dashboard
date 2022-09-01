const { use } = require('./route/main.route');
// const {usermain} = require('./swaggerLinks/userspath')
const tag = {
    user : "Users",
    modules: " Modules",
    home: "Home"
}
const swaggerDocs =  {
    openapi : "3.0.0",
    info: {
        title: "MLPHMPLSPPPP",
        description: " this a demo site",
        version: "0.0.1"
    },
    servers: [
        {
            url : 'http://localhost:6000'
        },
        {
            url : 'http://localhost:3000'
        }
    ],
    tags : [
        {
            name: tag.home,
            description: " this is open route which needs no auth protection"
        },
        {
            name: tag.user,
            description: " this is the Routes is completed related with website users"
        },
        {
            name: tag.modules,
            description: " this Route will manage with modules"
        }
    ],
    paths:  {
            "/": {
                get : {
                    tags: [tag.home],
                    description: "this is the home url",
                    responses: {
                        200: {
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
            },

        }
}
module.exports = swaggerDocs
