export class AddressService {
  getFullAddress(customer) {
    return (
      customer.address1 +
      ', ' +
      customer.city +
      ', ' +
      customer.state +
      ' ' +
      customer.zip
    );
  }
}
