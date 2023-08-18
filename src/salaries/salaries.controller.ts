import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SalariesService } from './salaries.service';
//import { Salary } from './Salary.entity';
import { CreateSalaryDto, GetSalaryDto, statisticsDto } from './dto/salary.dto';

@Controller('salaries')
export class SalariesController {
  constructor(private readonly salariesService: SalariesService) {}

  //get all salaries
  @Get()
  async findAll(): Promise<GetSalaryDto[]> {
    return await this.salariesService.findall();
  }

  //get one salary
  /*@Get(':id')
  async findOne(@Param('id') id: number): Promise<GetSalaryDto> {
    const salary = await this.salariesService.findOne(id);
    if (!salary) {
      throw new Error('salary not found');
    } else {
      return salary;
    }
  }*/

  //create salary
  @Post()
  async create(@Body() salary: CreateSalaryDto): Promise<CreateSalaryDto> {
    return await this.salariesService.create(salary);
  }

  //update salary
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() salary: GetSalaryDto,
  ): Promise<GetSalaryDto> {
    return await this.salariesService.update(id, salary);
  }

  //delete salary
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    const salary = await this.salariesService.findOne(id);
    if (!salary) {
      throw new Error('salary not found');
    }
    return this.salariesService.delete(id);
  }

  //get all salaries
  @Get('statistics')
  async getSalaryStatistics(): Promise<any> {
    const allSalaries = await this.salariesService.getAllSalaries();

    const mean = this.salariesService.calculateMean(allSalaries);
    const min = this.salariesService.calculateMin(allSalaries);
    const max = this.salariesService.calculateMax(allSalaries);

    return {
      mean,
      min,
      max,
    };
  }
  // fetch mean, min, max for salary over the entire database for provided financial year

  // fetch mean, min, max for salary for records which satisfy on_contract true for provided financial year

  //fetch mean, min, max for salary for each department. This means that whatever you’ll do in Step 3, should be done for each department

  // fetch mean, min, max for salary for each department and sub-department combination
}
