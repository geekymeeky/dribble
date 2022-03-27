import {atom} from 'recoil';


interface Team {
    id: number
    abbreviation: string
    city: string
    conference: string
    division: string
    full_name: string
    name: string
  }

export const allTeams = atom<Team[]>({
    key: 'allTeams',
    default: [],
});