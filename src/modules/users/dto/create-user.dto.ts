export class CreateUserDto {
  password: string;
  email: string;
  isActive?: boolean;
  firstName: string;
  lastName?: string;
}
