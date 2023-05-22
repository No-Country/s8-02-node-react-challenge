import swaggerJsDoc from "swagger-jsdoc";
import dotenv from "dotenv";
dotenv.config()

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API: Mercacopia",
            version: "1.0.0",
            description: "API OF THE PROJECT OF FINTECH MERCADO PAGO",
        },
        servers: [
            {
                url: process.env.ORIGIN1,
                description: 'API Users for the ...'
            }
        ],
        contact: [
            {
                github: "https://github.com/No-Country/s8-02-node-react-challenge",
                gmail: "mercacopiapagos@gmail.com"
            }
        ],
        tags: [
            {
                name: "User",
                description: "Operations about user"
            },
            {
                name: "Cards",
                description: "Operations about the cards of the users"
            },
            {
                name: "Activity",
                description: "Operations about activity of the users"
            }
        ],
        paths: {
            "/auth/user/": {
                get: {
                    tags: [
                        "User"
                    ],
                    summary: "GET all users in system",
                    responses: {
                        200: {
                            description: "Successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                }
                            }
                        },
                        405: {
                            description: "Invalid input"
                        }
                    },
                    security: [
                        {
                            userstore_auth: [
                                "write:user",
                                "read:user"
                            ]
                        }
                    ]
                }
            },
            "/auth/user/register": {
                post: {
                    tags: [
                        "User"
                    ],
                    summary: "Create user",
                    description: "Created user object",
                    operationId: "createUser",
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/user"
                                }
                            },
                            "multipart/form-data": {
                                schema: {
                                    $ref: "#/components/schemas/user"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/user"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/user"
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                },
                                "multipart/form-data": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid username supplied"
                        },
                        404: {
                            description: "user not found"
                        }
                    }
                }
            },
            "/auth/user/login": {
                post: {
                    tags: [
                        "User"
                    ],
                    summary: "Login user",
                    description: "user Logued",
                    operationId: "loginUser",
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/user/properties/email",
                                    $ref1: "#/components/schemas/user/properties/password"
                                }
                            },
                            "multipart/form-data": {
                                schema: {
                                    $ref: "#/components/schemas/user/properties/email",
                                    $ref1: "#/components/schemas/user/properties/password"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/user/properties/email",
                                    $ref1: "#/components/schemas/user/properties/password"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/user/properties/email",
                                    $ref1: "#/components/schemas/user/properties/password"
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/user/properties/email",
                                        $ref1: "#/components/schemas/user/properties/password"
                                    }
                                },
                                "multipart/form-data": {
                                    schema: {
                                        $ref: "#/components/schemas/user/properties/email",
                                        $ref1: "#/components/schemas/user/properties/password"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/user/properties/email",
                                        $ref1: "#/components/schemas/user/properties/password"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid username supplied"
                        },
                        404: {
                            description: "user not found"
                        }
                    }
                }
            },
            "/auth/user/{id}": {
                get: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "User"
                    ],
                    summary: "Get user by user ID",
                    parameters: [
                        {
                            in: "path",
                            name: "id",
                            description: "The name that needs to be fetched. Use user1 for testing.",
                            required: true,
                            schema: {
                                type: String
                            }
                        },
                        {
                            name: "Authorization",
                            in: "header",
                            description: "Token",
                            required: true,
                            example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
                        }
                    ],
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid username supplied"
                        },
                        404: {
                            description: "user not found"
                        }
                    }
                },
                patch: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "User"
                    ],
                    summary: "Update user",
                    description: "This can only be done by the logged in user.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The id that needs to be update",
                            required: true,
                            schema: {
                                type: String
                            }
                        },
                        {
                            name: "Authorization",
                            in: "header",
                            description: "Token",
                            required: true,
                            example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
                        }
                    ],
                    requestBody: {
                        required: true,
                        description: "Update an existent user in the store",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/user"
                                }
                            },
                            "multipart/form-data": {
                                schema: {
                                    $ref: "#/components/schemas/user"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/user"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/user"
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                },
                                "multipart/form-data": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                },
                                "application/x-www-form-urlencoded": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                }
                            }
                        },
                        404: {
                            description: "user not found",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                }
                            }
                        }
                    }
                },
                delete: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "User"
                    ],
                    summary: "Delete user",
                    description: "This can only be done by the deletedd in user.",
                    operationId: "deleteUser",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The id that needs to be deleted",
                            required: true,
                            schema: {
                                type: String
                            }
                        },
                        {
                            name: "Authorization",
                            in: "header",
                            description: "Token",
                            required: true,
                            example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
                        }
                    ],
                    requestBody: {
                        description: "Delete an existent user in the store",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/user/properties/username",
                                    $ref2: "#/components/schemas/user/properties/email",
                                    $ref3: "#/components/schemas/user/properties/password"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/user/properties/username",
                                    $ref2: "#/components/schemas/user/properties/email",
                                    $ref3: "#/components/schemas/user/properties/password"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/user/properties/username",
                                    $ref2: "#/components/schemas/user/properties/email",
                                    $ref3: "#/components/schemas/user/properties/password"
                                }
                            }
                        },
                        required: true
                    },
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid username supplied",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                }
                            }
                        },
                        404: {
                            description: "user not found",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/auth/card/{id}": {
                get: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "Cards"
                    ],
                    summary: "Get User cards by ID",
                    parameters: [
                        {
                            in: "path",
                            name: "id",
                            description: "The name that needs to be fetched. Use user for testing.",
                            required: true,
                            schema: {
                                type: String
                            }
                        }
                        // {
                        //     // name: "Authorization",
                        //     // in: "header",
                        //     // description: "Token",
                        //     // required: true,
                        //     // example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
                        //     in: "path",
                        //     name: "id",
                        //     description: "The name that needs to be fetched. Use card for testing.",
                        //     required: true,
                        //     schema: {
                        //         type: String
                        //     }
                        // }
                    ],
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid card supplied"
                        },
                        404: {
                            description: "card not found"
                        }
                    }
                },
                post: {
                    tags: [
                        "Cards"
                    ],
                    summary: "Create card for the user",
                    description: "Created user card object",
                    operationId: "createCard",
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/card"
                                }
                            },
                            "multipart/form-data": {
                                schema: {
                                    $ref: "#/components/schemas/card"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/card"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/card"
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                },
                                "multipart/form-data": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid username supplied"
                        },
                        404: {
                            description: "user not found"
                        }
                    }
                },
                patch: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "Cards"
                    ],
                    summary: "Update  cards of user",
                    description: "This can only be done by the logged in user.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The id that needs to be update",
                            required: true,
                            schema: {
                                type: String
                            }
                        }
                    ],
                    requestBody: {
                        required: true,
                        description: "Update an existent user in the store",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/card"
                                }
                            },
                            "multipart/form-data": {
                                schema: {
                                    $ref: "#/components/schemas/card"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/card"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/card"
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                },
                                "multipart/form-data": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                },
                                "application/x-www-form-urlencoded": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                }
                            }
                        },
                        404: {
                            description: "user not found",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                }
                            }
                        }
                    }
                },
                delete: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "Cards"
                    ],
                    summary: "Delete card of the user",
                    description: "This can only be done by the deletedd in cards of the users user.",
                    operationId: "deleteCard",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The id that needs to be deleted",
                            required: true,
                            schema: {
                                type: String
                            }
                        }
                    ],
                    requestBody: {
                        description: "Delete an existent user in the store",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/card"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/card"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/card"
                                }
                            }
                        },
                        required: true
                    },
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid username supplied",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                }
                            }
                        },
                        404: {
                            description: "user not found",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        components: {
            schemas: {
                order: {
                    type: "object",
                    properties: {
                        id: {
                            type: "String",
                            example: "638d039e8ce24f8a608e5a37"
                        },
                        userId: {
                            type: "String"
                        },
                        quantity: {
                            type: "String",
                            example: "638d039e8ce24f8a608e5a37"
                        },
                        shipDate: {
                            type: "String",
                            format: "date-time"
                        },
                        status: {
                            type: "String",
                            description: "Order Status",
                            example: "approved",
                            enum: [
                                "placed",
                                "approved",
                                "delivered"
                            ]
                        },
                        complete: {
                            type: "boolean"
                        }
                    },
                    xml: {
                        name: "order"
                    }
                },
                user: {
                    type: "object",
                    required: [
                        "username",
                        "email",
                        "password"
                    ],
                    properties: {
                        username: {
                            type: "string",
                            required: true,
                            example: "Usuario"
                        },
                        alias: {
                            type: "string",
                            required: false,
                            example: "Nombre.de.alias"
                        },
                        cvu: {
                            type: "number",
                            required: false,
                            example: "00000062624512345678"
                        },
                        email: {
                            type: "string",
                            required: true,
                            example: "correo@correo.com"
                        },
                        password: {
                            type: "string",
                            required: true,
                            example: "12345aB!"
                        },
                        urlProfile: {
                            type: "string",
                            format: "binary",
                            description: "Archivo de carga para la foto de pefil del usuario"
                        },
                        dni: {
                            type: "number",
                            required: false,
                            description: "Dni of the user",
                            example: "00.000.000"
                        },
                        fullname: {
                            type: "string",
                            required: true,
                            example: "Unknown"
                        },
                        phone: {
                            type: "number",
                            required: true,
                            example: "011-0000-0000"
                        },
                        address: {
                            type: "string",
                            required: true,
                            example: "Av. calle falsa 123"
                        },
                        balance: {
                            type: "number",
                            required: true,
                            example: "23.362,215"
                        }
                    },
                    xml: {
                        name: "user"
                    }
                },
                card: {
                    type: "object",
                    required: [
                        "bank_emisor",
                        "bank",
                        "expiration_date",
                        "user_name",
                        "cvv",
                        // "id_user"
                    ],
                    properties: {
                        bank_emisor: {
                            type: String,
                            required: true,
                            unique: true,
                            example: "Patagonia"
                        },
                        bank: {
                            type: String,
                            required: true,
                            example: "visa"
                        },
                        expiration_date: {
                            type: String,
                            unique: false,
                            example: "02/30"
                        },
                        user_card: {
                            type: String,
                            required: true,
                            example: "NOMBRE DE TARJETA"
                        },
                        number_card: {
                            type: "number",
                            required: true,
                            example: "NOMBRE DE TARJETA"
                        },
                        cvv: {
                            type: "number",
                            required: true,
                            example: "264"
                        },
                        // id_user: {
                        //     type: String,
                        //     required: true,
                        //     description: "id"
                        // },
                    },
                    xml: {
                        name: "card"
                    }
                },
                activity: {
                    type: "object",
                    required: [
                        "amount",
                        "date_activity",
                        // "id_user"
                    ],
                    properties: {
                        bank_emisor: {
                            type: String,
                            required: true,
                            unique: true,
                            example: "Patagonia"
                        },
                        bank: {
                            type: String,
                            required: true,
                            example: "visa"
                        },
                        expiration_date: {
                            type: String,
                            unique: false,
                            example: "02/30"
                        },
                        user_name: {
                            type: String,
                            required: true,
                            example: "NOMBRE DE TARJETA"
                        },
                        cvv: {
                            type: "number",
                            required: true,
                            example: "264"
                        },
                        // id_user: {
                        //     type: String,
                        //     required: true,
                        //     description: "id"
                        // },
                    },
                    xml: {
                        name: "activity"
                    }
                }
            },
            requestBodies: {
                UserArray: {
                    description: "List of users object",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/User"
                                }
                            }
                        }
                    }
                }
            },
            securitySchemes: {
                api_key: {
                    type: "apiKey",
                    name: "Authorization",
                    in: "header"
                }
            }
        }
    },
    apis: ["./routes/*.js"]
}

// Docs in JSON format
export const specs = swaggerJsDoc(options);