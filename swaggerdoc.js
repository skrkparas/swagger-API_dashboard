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
        title: "KAPIVA DASHBOARD",
        description: "swagger implementation for dashboard - Please note dev server version will be updated",
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
            description: " this Routes is related with website users CURD operations"
        },
        {
            name: tag.modules,
            description: " this Route will manage with website related modules"
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
