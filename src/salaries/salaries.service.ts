import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salary } from './Salary.entity';
import { SalaryDto } from './dto/salary.dto';

@Injectable()
export class SalariesService {
  constructor(
    @InjectRepository(Salary)
    private salaryRepository: Repository<Salary>,
  ) {}

  // get all salaries
  async findall(): Promise<Salary[]> {
    return await this.salaryRepository.find();
  }

  //get one salaries
  async findOne(id: number): Promise<Salary> {
    return await this.salaryRepository.findOne({ where: { id } });
  }

  //create salaries
  async create(salary: Salary): Promise<Salary> {
    const newSalary = this.salaryRepository.create(salary);
    return await this.salaryRepository.save(newSalary);
  }

  //update salaries
  async update(id: number, salary: Salary): Promise<Salary> {
    await this.salaryRepository.update(id, salary);
    return this.salaryRepository.findOne({ where: { id } });
  }

  //delete salaries
  async delete(id: number): Promise<void> {
    await this.salaryRepository.delete(id);
  }

  // --------------------------------------
  async getAllSalaries(): Promise<SalaryDto[]> {
    const Unique = [];
    (await this.salaryRepository.find()).forEach((salary) => {
      Unique.push(salary.salary);
    });
    return Unique;
  }

  calculateMean(salaries: SalaryDto[]) {
    const totalSalary = salaries.reduce(
      (sum, salary) => sum + salary.salary,
      0,
    );
    return totalSalary / salaries.length;
  }

  calculateMin(salaries: SalaryDto[]) {
    const minSalary = Math.min(...salaries.map((salary) => salary.salary));
    return minSalary;
  }

  calculateMax(salaries: SalaryDto[]) {
    const maxSalary = Math.max(...salaries.map((salary) => salary.salary));
    return maxSalary;
  }
}
