import {User} from "@/models/User";
import bcrypt from "bcrypt";
import {setCookie} from "cookies-next";
import {cookies} from "next/headers";

export async function POST(request: Request) {
    const json = await request.json();
    const user: any = await User.findOne({where: {email: json.email}})
    const correct = await bcrypt.compare(json.password, user.password)
    if (correct) {
        setCookie("login", user.email, {cookies})
        return Response.json(user)
    }
    return new Response(null, {
        status: 401
    })
}