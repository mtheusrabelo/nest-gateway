import { check } from 'k6';
import http from 'k6/http';
const port = 3001;

export const options = {
  vus: 10,
  duration: '5s',
};

export default function () {
  const res = http.get(`http://localhost:${port}/throttler`);
  check(res, { 'status was 200': (r) => r.status == 200 });
  // sleep(1);
}
