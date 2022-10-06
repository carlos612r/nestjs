export function InvoiceInfoMock() {
    return {
        getAllInvoices: jest.fn(),
        getInvoiceById: jest.fn(),
    };
}
