import axios from "axios";

export default axios.create({
  baseURL: "http://webgenieserver-dev.ap-northeast-2.elasticbeanstalk.com/",
});
