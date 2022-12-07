import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { Tournament } from './entities/tournament.entity';

@Injectable()
export class TournamentService {
  constructor(
    @InjectRepository(Tournament)
    private tournamentRepo: Repository<Tournament>,
  ) {}

  create(createTournamentDto: CreateTournamentDto) {
    return this.tournamentRepo.save(createTournamentDto);
  }

  findAll() {
    return this.tournamentRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tournament`;
  }

  update(id: number, updateTournamentDto: UpdateTournamentDto) {
    return `This action updates a #${id} tournament`;
  }

  remove(id: number) {
    return `This action removes a #${id} tournament`;
  }
}
