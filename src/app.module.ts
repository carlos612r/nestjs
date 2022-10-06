import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { APIModule } from "./API/api.module";
import { ConfigModule } from "@nestjs/config";
import { ScheduleModule } from "@nestjs/schedule";
//import { EducationalCenterSchedulerManagerModule } from "./Domain/Jobs/educationalCenterSchedulerManager.module";

@Module({
    imports: [
        APIModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        ScheduleModule.forRoot(),
        //EducationalCenterSchedulerManagerModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule implements NestModule {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    configure(consumer: MiddlewareConsumer) {
        //consumer.apply(LoggerMiddleware).forRoutes("/");
    }
}
