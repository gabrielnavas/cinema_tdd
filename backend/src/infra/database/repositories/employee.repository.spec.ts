import { Address, Employee, Name } from '../../../models/employee'
import { database } from '../configs/connection'
import { EmployeePosgresRepository } from './employee-repository'

const deleteAllEmployee = () => database.query('delete from cinema.employee')
const selectAllEmployee = () => database.query('select * from cinema.employee')

describe('EmployeeRepository', () => {
  beforeEach(async () => {
    await deleteAllEmployee()
  })
  afterEach(async () => {
    await deleteAllEmployee()
  })

  test('should create new employee in database', async () => {
    const employee = new Employee(
      new Name('gabriel', 'navas'),
      new Address('street one', 22, 'poll mc district'),
      new Date(2000, 1, 1)
    )
    const repository = new EmployeePosgresRepository()
    await repository.insert(employee)
    const query = await selectAllEmployee()
    expect(query.length).toBe(1)
    expect(query[0].address_street_name).toBe('street one')
    expect(query[0].address_street_number).toBe('22')
    expect(query[0].address_district).toBe('poll mc district')
    expect(query[0].first_name).toEqual('gabriel')
    expect(query[0].last_name).toEqual('navas')
    expect(query[0].birth_date).toEqual(new Date('2000-02-01T02:00:00.000Z'))
  })
})
