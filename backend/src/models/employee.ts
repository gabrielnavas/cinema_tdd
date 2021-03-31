type Name = {
  firstName: Readonly<string>
  lastName: Readonly<string>
}

type Address = {
  streetName: Readonly<string>
  streetNumber: Readonly<number>
  district: Readonly<string>
}

type Employee = {
  name: Readonly<Name>,
  address: Readonly<Address>,
  birthDate: Readonly<Date>
}

const verifyName = (name: Name) => {
  if (name.firstName.length < 2 || name.firstName.length > 30) {
    throw new Error('first name length must be between 2 and 30 characters.')
  }
  if (name.lastName.length < 2 || name.lastName.length > 20) {
    throw new Error('last name length must be between 2 and 30 characters.')
  }
}

const verifyAddress = (address:Address) => {
  if (address.streetName.length < 4 || address.streetName.length > 80) {
    throw new Error('street name length must be between 3 and 80 characters.')
  }
  if (address.streetNumber < 0) {
    throw new Error('street number cannot be negative.')
  }
  if (address.streetNumber > Number.MAX_SAFE_INTEGER) {
    throw new Error('very large street number.')
  }
  if (address.district.length < 2 || address.district.length > 80) {
    throw new Error('district length must be between 3 and 80 characters.')
  }
}

const verifyEmployee = (params: Employee) => {
  verifyName(params.name)
  verifyAddress(params.address)
  const birthYear = params.birthDate.getUTCFullYear()
  const nowYear = 2021
  const differenceYear = nowYear - birthYear
  if (differenceYear > 120) {
    throw new Error('Employee cannot be more than 120 years old.')
  }
}

export const employeModelFactory = (params: Employee) => {
  verifyEmployee(params)
  const employee = params
  return employee
}
