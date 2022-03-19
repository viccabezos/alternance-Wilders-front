export interface Wilder {
  _id?: string;
  name: string;
  city: string;
  description?: string;
  skills?: Skill[];
}

export interface Skill {
  _id: string;
  title: string;
  votes: number;
}
