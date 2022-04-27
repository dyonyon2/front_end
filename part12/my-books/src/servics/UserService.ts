import axios from "axios";
import { LoginReqType } from "../types";

const USER_API_URL = "https://api.marktube.tv/v1/me";

export default class UserService {
    // public static async login(reqData: LoginReqType) {
    //     const res = await axios.post(USER_API_URL, reqData);
    //     return res.data.token;
    // }

    public static async login(reqData: LoginReqType): Promise<string> {
        // console.log("in Userservice");
        const res = await axios.post(USER_API_URL, reqData);
        console.log(res);
        return res.data.token;
    }

    public static async logout(token: string): Promise<void> {
        console.log("in Userservice logout");
        await axios.delete(USER_API_URL, {
            headers: { Authorization: `Bearer ${token}` },
        });
    }
}
