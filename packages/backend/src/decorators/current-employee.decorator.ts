import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { DecodedJwt } from '@sales-app/types';

export const CurrentEmployee = createParamDecorator<
  unknown,
  unknown,
  DecodedJwt
>((_: never, context: ExecutionContext) => {
  const req = context.switchToHttp().getRequest();

  console.log('req: ', req.user);

  return req.user as DecodedJwt;
});
