import { Module } from "@nestjs/common";
import { InvoiceInfoService } from "./invoice.service";

@Module({
    imports: [],
    providers: [InvoiceInfoService],
    exports: [InvoiceInfoService],
})
export class InvoiceModule {}
