import { User } from '@/models/User';
import { cookies } from 'next/headers'
import {getCookie} from "cookies-next";

export async function GET() {
    const mail = getCookie("login", {cookies})
    const user = await User.findOne({where: {email: mail}})
    return Response.json(user)
}