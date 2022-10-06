import { Test, TestingModule } from "@nestjs/testing";
import { InvoiceModule } from "src/Domain/invoice/invoice.module";
import { InvoiceController } from "src/API/invoice/invoice.controller";
import { InvoiceInfoService } from "src/Domain/invoice/invoice.service";
import { invoiceMock } from "src/tests/mocks/invoice/invoices";
import { InvoiceInfoMock } from "src/tests/mocks/invoice/invoice-service";

describe("invoiceController", () => {
    let controller: InvoiceController;
    let invoiceInfoMock;

    beforeEach(async () => {
        invoiceInfoMock = InvoiceInfoMock();
        const module: TestingModule = await Test.createTestingModule({
            imports: [InvoiceModule],
            controllers: [InvoiceController],
            providers: [],
        })
            .overrideProvider(InvoiceInfoService)
            .useValue(invoiceInfoMock)
            .compile();

        controller = module.get<InvoiceController>(InvoiceController);
    });

    it("requesting by id should return an object matching by id invoiceren", async () => {
        const invoiceId = 1;

        invoiceInfoMock.getInvoiceById.mockImplementation((invoiceId) => {
            return invoiceMock.find((c) => c.invoiceId === invoiceId);
        });

        const invoice = await controller.findOne(invoiceId);
        expect(invoice.invoiceId).toEqual(invoiceId);
    });
});
