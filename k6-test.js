import http from "k6/http";
import { sleep } from "k6";

export let options = {
  stages: [
    { duration: "1m", target: 1000 }, // 1분 동안 10명의 유저
  ],
};

export default function () {
  // localhost:8080으로 GET 요청을 보냅니다.
  let response = http.get("http://localhost:8080");
}
