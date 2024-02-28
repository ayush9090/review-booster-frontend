import axios from "axios";
import { link } from "fs";
let localhost = "3.15.158.67";

export class sendSmsandEmailRepo {
  async sendEmail(name: string, email: string, link: string) {
    try {
      const url = "http://"+localhost+":8080/email/sendEmail";
      const payload = {
        from: "reviewboooster@gmail.com",
        to: email,
        text: link + " " + name,
        subject: "review",
      };
      const res = await axios.post(url, payload);
      return res;
    } catch (error) {
      console.log("error", error);
      return "error";
    }
  }
}
