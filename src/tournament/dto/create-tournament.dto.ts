import { PartialType } from '@nestjs/mapped-types';
import { Tournament } from '../entities/tournament.entity';

export class CreateTournamentDto extends PartialType(Tournament) {}
