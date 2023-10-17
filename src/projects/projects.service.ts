import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Repository } from 'typeorm';
import { Project, ProjectStatus } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepo: Repository<Project>,
  ) {}
  create(createProjectDto: CreateProjectDto) {}

  findAll() {}

  findOne(id: string) {
    return this.projectRepo.findOneOrFail({ where: { id } });
  }

  // async update(id: string, updateProjectDto: UpdateProjectDto) {
  //   const project = await this.projectRepo.findOneOrFail({ where: { id } });

  //   if (updateProjectDto.cancelled_at) {
  //     if (project.status === ProjectStatus.Completed) {
  //       throw new Error(`Cannot cancel completed Project`);
  //     }
  //     if (project.status === ProjectStatus.Cancelled) {
  //       throw new Error(`Cannot cancel cancelled Project`);
  //     }

  //     project.cancelled_at = updateProjectDto.cancelled_at;
  //     project.status = ProjectStatus.Cancelled;
  //   }

  //   if (updateProjectDto.finished_at) {
  //     if (project.status === ProjectStatus.Completed) {
  //       throw new Error(`Cannot finish completed Project`);
  //     }
  //     if (project.status === ProjectStatus.Cancelled) {
  //       throw new Error(`Cannot finish cancelled Project`);
  //     }

  //     project.finished_at = updateProjectDto.finished_at;
  //     project.status = ProjectStatus.Completed;
  //   }

  //   return this.projectRepo.save(project);
  // }

  remove(id: string) {
    return `This action removes a #${id} project`;
  }
}
