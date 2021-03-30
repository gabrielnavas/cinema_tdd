import { Employee } from '../../../models/employee'
import { EmployeeRepository } from '../../../service/employee/protocols'
import { database } from '../configs/connection'

export class EmployeePosgresRepository implements EmployeeRepository {
  async insert (employee: Employee): Promise<void> {
    const sql = `
      insert into cinema.employee
        (first_name, last_name, address_street_name, 
          address_street_number, address_district, birth_date)
      values
        ($1, $2, $3, $4, $5, $6) 
    `
    const params = [
      employee.name.firstName,
      employee.name.lastName,
      employee.address.streetName,
      employee.address.streetNumber,
      employee.address.streetNumber,
      employee.birthDate
    ]
    await database.none(sql, params)
  }
}
