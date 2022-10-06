import { Controller, Get, Param } from "@nestjs/common";

@Controller("invoice")
export class InvoiceController {
    @Get("/:invoiceId")
    async findOne(@Param("invoiceId") invoiceId: number): Promise<any> {
        return {
            invoiceId: 1,
        };
    }
}
