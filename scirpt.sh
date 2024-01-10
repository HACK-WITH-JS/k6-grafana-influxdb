 # testdb로 메트릭 보내기git init
 k6 run \
  --out influxdb=http://localhost:8086/testdb \
  k6-test.js