import { Module } from "@nestjs/common";
import { InvoiceModule } from "src/Domain/invoice/invoice.module";
import { InvoiceController } from "./invoice/invoice.controller";

@Module({
    imports: [InvoiceModule],
    controllers: [InvoiceController],
    providers: [],
    exports: [],
})
export class APIModule {}
