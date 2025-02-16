import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    Query,
    UseGuards,
  } from '@nestjs/common';
  import { EmployeesService } from './employees.service';
  import { CreateEmployeeDto } from './dto/create-employee.dto';
  import { UpdateEmployeeDto } from './dto/update-employee.dto';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Importa el guard
  
  @Controller('employees')
  @UseGuards(JwtAuthGuard) // Protege la ruta con JWT
  export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) {}
  
    @Get()
    async findAll(@Query('page') page: number = 1) {
      const limit = 50; // 50 empleados por página
      return this.employeesService.findAll(page, limit);
    }
  
    @Post()
    async create(@Body() createEmployeeDto: CreateEmployeeDto) {
      return this.employeesService.create(createEmployeeDto);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: number,
      @Body() updateEmployeeDto: UpdateEmployeeDto,
    ) {
      return this.employeesService.update(id, updateEmployeeDto);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: number) {
      return this.employeesService.remove(id);
    }
  }