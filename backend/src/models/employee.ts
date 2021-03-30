export class Name {
  constructor (
    public readonly firstName: string,
    public readonly lastName: string
  ) {
    if (this.firstName.length < 2 || this.firstName.length > 30) {
      throw new Error('first name length must be between 2 and 30 characters.')
    }
    if (this.lastName.length < 2 || this.lastName.length > 20) {
      throw new Error('last name length must be between 2 and 30 characters.')
    }
  }
}

export class Address {
  constructor (
    public readonly streetName: string,
    public readonly streetNumber: number,
    public readonly district: string

  ) {
    if (this.streetName.length < 4 || this.streetName.length > 80) {
      throw new Error('street name length must be between 3 and 80 characters.')
    }
    if (this.streetNumber < 0) {
      throw new Error('street number cannot be negative.')
    }
    if (this.streetNumber > Number.MAX_SAFE_INTEGER) {
      throw new Error('very large street number.')
    }
    if (this.district.length < 2 || this.district.length > 80) {
      throw new Error('district length must be between 3 and 80 characters.')
    }
  }
}

export class Employee {
  constructor (
    public readonly name: Name,
    public readonly address: Address,
    public readonly birthDate: Date
  ) {
    const birthYear = this.birthDate.getUTCFullYear()
    const nowYear = 2021
    const differenceYear = nowYear - birthYear
    if (differenceYear > 120) {
      throw new Error('Employee cannot be more than 120 years old.')
    }
  }
}
