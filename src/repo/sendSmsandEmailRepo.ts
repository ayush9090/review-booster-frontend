import axios from "axios";

export class sendSmsandEmailRepo {
  async sendEmail(name: string, email: string, phoneNumber: string) {
    const url = "localhost:8080/email/sendEmail";
    const payload = { motelEmail: email };
    const motels = await axios.post(url, payload);
    return motels.data.motels;
  }
}
