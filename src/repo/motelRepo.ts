import axios from "axios";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../config/Firebase";
import { UpdateProfileRequest } from "../constants/constants";
let localhost="3.15.158.67"
export class MotelRepo {
  dbRef = collection(firestore, "motels");

  async getMotels() {
    const url = "http://"+localhost+":8080/motel/getMotels";
    const motels = await axios.get(url);
  }

  async getMotelsByEmail(email: string) {
    const url = "http://"+localhost+":8080/motel/getMotelsByEmail";
    const payload = { motelEmail: email };
    const motels = await axios.post(url, payload);
    return motels.data.motels;
  }

  async updateProfile(updatedFields: any, email: string) {
    const q = query(this.dbRef, where("motelEmail", "==", email));
    try {
      const querySnapshot = await getDocs(q);
      const document = querySnapshot.docs[0];
      const documentId = document.id;
      const docRef = doc(this.dbRef, documentId);
      const response = await updateDoc(docRef, updatedFields);
      console.log("respons in repo", response);
    } catch (error) {
      console.log("error", error);
      return "error";
    }
  }
}
