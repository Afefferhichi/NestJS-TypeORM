import { UserEntity } from 'src/users/user.entity';
import { UserDto } from 'src/users/dto/user.dto';

export const toUserDto = (data: UserEntity): UserDto => {
  const { id, username, email } = data;

  const userDto: UserDto = {
    id,
    username,
    email,
  };

  return userDto;
};
