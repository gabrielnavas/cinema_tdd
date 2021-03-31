import { Employee } from '../../models/employee'
import { EmployeeRepository } from './protocols'

export class CreateEmployeService {
  constructor (
    private readonly employeeRepository: EmployeeRepository
  ) {}

  async handle (employee: Employee): Promise<void> {
    await this.employeeRepository.insert(employee)
  }
}
