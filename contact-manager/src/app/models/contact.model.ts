export interface IContact {
    id: string,
    firstName: string,
    middleName: string,
    lastName: string,
    birthDay: string,
    phones: IPhone[],
    addresses: IAddress[],
    emails: IEmail[]

}
export interface IPhone {
    phoneTitle: string,
    countryCode: string,
    phoneNumber: string
}
export interface IAddress {
    addressTitle: string,
    street: string,
    city: string,
    zipCode: string,
    state: string,
    country: string
}
export interface IEmail {
    emailTitle: string,
    emailId: string
}
