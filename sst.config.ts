import { Stack } from './.infra/stack';

export default {
  // eslint-disable-next-line
  config(_input) {
    return {
      name: 'nest-gateway',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(Stack);
  },
};
