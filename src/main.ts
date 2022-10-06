import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Settings } from "luxon";
import { TIMEZONE } from "./timezone";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(
        new ValidationPipe({ whitelist: true, transform: true }),
    );
    app.setGlobalPrefix("api");

    Settings.defaultZone = TIMEZONE;
    Settings.defaultLocale = "es-CL";
    await app.listen(8000);
}
bootstrap();
