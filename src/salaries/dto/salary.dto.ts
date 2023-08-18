export class CreateSalaryDto {
  id: number;
  name: string;
  salary: number;
  currency: string;
  on_contract: boolean;
  department: string;
  sub_department: string;
}

export class GetSalaryDto {
  id: number;
  name: string;
  salary: number;
  currency: string;
  on_contract: boolean;
  department: string;
  sub_department: string;
}

export class SalaryDto {
  id: number;
  name: string;
  salary: number;
  currency: string;
  on_contract: boolean;
  department: string;
  sub_department: string;
}

export class statisticsDto {
  mean: number;
  min: number;
  max: number;
}
