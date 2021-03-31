import { employeModelFactory } from './employee'

describe('Address Model', () => {
  test('should throw if street name is small', () => {
    const testThrow = () => employeModelFactory({
      name: {
        firstName: 'Gabriel',
        lastName: 'Navas'
      },
      address: {
        streetName: 'str',
        streetNumber: 22,
        district: 'Village snakes'
      },
      birthDate: new Date(2000, 1, 1)
    })
    const error = new Error('street name length must be between 3 and 80 characters.')
    expect(testThrow).toThrow(error)
  })

  test('should throw if street name is large', () => {
    const eigthOneCharacteres = Array(81).fill('a').join('')
    const testThrow = () => employeModelFactory({
      name: {
        firstName: 'Gabriel',
        lastName: 'Navas'
      },
      address: {
        streetName: eigthOneCharacteres,
        streetNumber: 22,
        district: 'Village snakes'
      },
      birthDate: new Date(2000, 1, 1)
    })
    const error = new Error('street name length must be between 3 and 80 characters.')
    expect(testThrow).toThrow(error)
  })

  test('should throw if street number is negative', () => {
    const testThrow = () => employeModelFactory({
      name: {
        firstName: 'Gabriel',
        lastName: 'Navas'
      },
      address: {
        streetName: 'street one',
        streetNumber: -5,
        district: 'Village snakes'
      },
      birthDate: new Date(2000, 1, 1)
    })
    const error = new Error('street number cannot be negative.')
    expect(testThrow).toThrow(error)
  })

  test('should throw if district is small', () => {
    const testThrow = () => employeModelFactory({
      name: {
        firstName: 'Gabriel',
        lastName: 'Navas'
      },
      address: {
        streetName: 'street one',
        streetNumber: 22,
        district: 'v'
      },
      birthDate: new Date(2000, 1, 1)
    })
    const error = new Error('district length must be between 3 and 80 characters.')
    expect(testThrow).toThrow(error)
  })

  test('should throw if district is large', () => {
    const eigthOneCharacteres = Array(81).fill('a').join('')
    const testThrow = () => employeModelFactory({
      name: {
        firstName: 'Gabriel',
        lastName: 'Navas'
      },
      address: {
        streetName: 'street one',
        streetNumber: 22,
        district: eigthOneCharacteres
      },
      birthDate: new Date(2000, 1, 1)
    })
    const error = new Error('district length must be between 3 and 80 characters.')
    expect(testThrow).toThrow(error)
  })
})

describe('Name Model', () => {
  test('should throw if first name is small', () => {
    const testThrow = () => employeModelFactory({
      name: {
        firstName: 'G',
        lastName: 'Navas'
      },
      address: {
        streetName: 'street one',
        streetNumber: 22,
        district: 'Village Wolf'
      },
      birthDate: new Date(2000, 1, 1)
    })
    const error = new Error('first name length must be between 2 and 30 characters.')
    expect(testThrow).toThrow(error)
  })

  test('should throw if last name is small', () => {
    const testThrow = () => employeModelFactory({
      name: {
        firstName: 'Gabriel',
        lastName: 'n'
      },
      address: {
        streetName: 'street one',
        streetNumber: 22,
        district: 'Village Wolf'
      },
      birthDate: new Date(2000, 1, 1)
    })
    const error = new Error('last name length must be between 2 and 30 characters.')
    expect(testThrow).toThrow(error)
  })
})
