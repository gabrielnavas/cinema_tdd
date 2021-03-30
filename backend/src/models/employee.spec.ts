import { Address, Employee, Name } from './employee'

describe('Address Model', () => {
  test('should throw if street name is small', () => {
    const testThrow = () => new Address(
      'str',
      22,
      'any_district'
    )
    const error = new Error('street name length must be between 3 and 80 characters.')
    expect(testThrow).toThrow(error)
  })

  test('should throw if street name is large', () => {
    const eigthOneCharacteres = Array(81).fill('a').join('')
    const testThrow = () => new Address(
      eigthOneCharacteres,
      22,
      'any_district'
    )
    const error = new Error('street name length must be between 3 and 80 characters.')
    expect(testThrow).toThrow(error)
  })

  test('should throw if street number is negative', () => {
    const testThrow = () => new Address(
      'street Julius Sam',
      -2,
      'any_district'
    )
    const error = new Error('street number cannot be negative.')
    expect(testThrow).toThrow(error)
  })

  test('should throw if district is small', () => {
    const testThrow = () => new Address(
      'street Julius Sam',
      22,
      'a'
    )
    const error = new Error('district length must be between 3 and 80 characters.')
    expect(testThrow).toThrow(error)
  })

  test('should throw if district is large', () => {
    const eigthOneCharacteres = Array(81).fill('a').join('')
    const testThrow = () => new Address(
      'street Julius Sam',
      22,
      eigthOneCharacteres
    )
    const error = new Error('district length must be between 3 and 80 characters.')
    expect(testThrow).toThrow(error)
  })
})

describe('Name Model', () => {
  test('should throw if first name is small', () => {
    const testThrow = () => new Name(
      'a',
      'any_last_name'
    )
    const error = new Error('first name length must be between 2 and 30 characters.')
    expect(testThrow).toThrow(error)
  })

  test('should throw if last name is small', () => {
    const testThrow = () => new Name(
      'any_first_name',
      'a'
    )
    const error = new Error('last name length must be between 2 and 30 characters.')
    expect(testThrow).toThrow(error)
  })
})

describe('Employee Model', () => {
  test('should throw if birth date is more 120 years', () => {
    const name = new Name('Gabriel', 'Navas')
    const address = new Address('Street One', 22, 'Ville people')
    const yearOld = 1900
    const monthJanuary = 1
    const dayOne = 1
    const testThrow = () => new Employee(
      name, address, new Date(yearOld, monthJanuary, dayOne)
    )
    expect(testThrow).toThrow()
  })
})
