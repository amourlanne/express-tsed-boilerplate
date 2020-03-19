import typeorm from "./packages/typeorm";
import mailer from "./packages/mailer";

export default {
    rootDir: "src",
    acceptMimes: [
        "application/json",
        "multipart/form-data"
    ],
    port: 3000,
    swagger: [
      {
        path: "/api-docs"
      }
    ],
    mount: {
        "/": "src/Controllers/**/*Controller.ts"
    },
    statics: {
        "/": "public"
    },
    componentsScan: [
        "src/Middlewares/**/*Middleware.ts",
        "src/Services/**/*Service.ts",
        "src/Converters/**/Converter*.ts"
    ],
    cors: {
      origin: /localhost/,
      credentials: true
    },
    viewsDir: "templates/Views",
    viewEngine: "twig",
    ajv: {
        errorFormat: (error) => `At ${error.modelName}${error.dataPath}, value '${error.data}' ${error.message}`,
        options: {verbose: true}
    },
    typeorm: [
      {
        name: "default",
        ...typeorm
      }
    ],
    mailer: mailer
}
