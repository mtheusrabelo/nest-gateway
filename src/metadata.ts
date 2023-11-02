/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./application/collaborations/create-human.dto"), { "CreateHumanDto": { name: { required: true, type: () => String, maxLength: 100 }, age: { required: true, type: () => Number, minimum: 0 } } }]], "controllers": [[import("./infrastructure/handlers/hello-world.handler"), { "HelloWorldHandler": { "run": { type: String } } }], [import("./infrastructure/handlers/secret.handler"), { "SecretHandler": { "run": { type: Object } } }], [import("./infrastructure/handlers/throttler.handler"), { "ThrottlerHandler": { "run": { type: String } } }], [import("./infrastructure/handlers/humans.handler"), { "HumansHandler": { "create": { type: String } } }]] } };
};