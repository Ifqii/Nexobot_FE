import axios from "axios";
import { RegisterProps } from "@/src/model/authentication.model";
const endpoint = process.env.NEXT_PUBLIC_ENDPOINT

export const Register = async(data: RegisterProps) => {
    const response = await axios.post(`${endpoint}/auth/register`, data);
    return response.data;
}

export const GoogleOauth = async() => {
    window.location.href = (`${endpoint}/auth/google/login`)
}

