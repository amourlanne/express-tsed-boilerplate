import typeorm from "./packages/typeorm";

export default {
    rootDir: "src",
    acceptMimes: [
        "application/json",
        "multipart/form-data"
    ],
    port: 3000,
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
    typeorm: typeorm,
    fixturesDir: "src/Fixtures"
}
