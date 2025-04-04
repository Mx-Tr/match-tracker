import { Match } from './api-types';

export interface UpdateMatchesMessage {
  type: 'update_matches';
  data: Match[];
}