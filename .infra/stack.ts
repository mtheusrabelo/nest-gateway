import { Config, Service, StackContext } from 'sst/constructs';

export function Stack({ stack }: StackContext) {
  // to set new secret, run:
  // $ yarn sst secrets set MY_SECRET "value123"
  new Config.Secret(stack, 'MY_SECRET');

  // register nest-gateway
  // new Service(stack, 'NestGateway', {
  //   path: '.',
  //   // customDomain: 'vigogh.com',
  //   architecture: 'x86_64', // or arm64
  //   scaling: {
  //     minContainers: 1,
  //     maxContainers: 2,
  //     cpuUtilization: 50,
  //     memoryUtilization: 50,
  //     requestsPerContainer: 1000,
  //   },
  //   port: 3000,
  //   cdk: {
  //     // applicationLoadBalancer: false,
  //     cloudfrontDistribution: false,
  //   },
  // });

  new Service(stack, 'TestService', {
    path: "./.test",
    architecture: 'arm64',
    scaling: {
      minContainers: 1,
      maxContainers: 2,
      cpuUtilization: 50,
      memoryUtilization: 50,
      requestsPerContainer: 1000,
    }
  });
}
