import {User} from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    const json = await request.json();
    const password = await bcrypt.hash(json.password, 10)
    const user = User.build({
        email: json.email,
        username: json.username,
        password: password
    })
    await user.save();
    return new Response(null, {
        status: 200
    })
}