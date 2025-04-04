import { MatchStatus } from './api-types';

export type FilterStatus = MatchStatus | 'All';

export interface StatusOption {
	label: string;
	value: FilterStatus;
  }