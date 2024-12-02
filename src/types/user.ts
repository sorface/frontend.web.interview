export type Role = 'User' | 'Admin';

export interface User {
  id: string;
  fistName: string;
  lastName: string;
  middleName: string;
  nickname: string;
  avatar?: string;
  roles: Role[];
}

export type UserType = 'Viewer' | 'Expert' | 'Examinee';
