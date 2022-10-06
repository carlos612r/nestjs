import { Injectable } from "@nestjs/common";
import { InvoiceEntity } from "./Entities/invoice.entity";

@Injectable()
export class InvoiceInfoService {
    async getAllInvoices(): Promise<Array<InvoiceEntity>> {
        return null;
    }
    async getInvoiceById(invoiceId: number): Promise<InvoiceEntity> {
        return null;
    }
}
