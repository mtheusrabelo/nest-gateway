import { Service, StackContext } from 'sst/constructs';

export function Stack({ stack }: StackContext) {
  new Service(stack, 'NestGateway', {
    path: '.',
    // customDomain: 'vigogh.com',
    scaling: {
      minContainers: 1,
      maxContainers: 2,
      cpuUtilization: 50,
      memoryUtilization: 50,
      requestsPerContainer: 1000,
    },
    // cdk: {
    //   applicationLoadBalancer: false,
    //   cloudfrontDistribution: false,
    // },
  });
}
