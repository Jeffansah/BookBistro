import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const errors: string[] = [];

    const validationSchema = [
      {
        valid: validator.isEmail(email),
        errorMessage: "Email is valid",
      },
      {
        valid: validator.isLength(password, {
          min: 1,
        }),
        errorMessage: "Invalid password",
      },
    ];

    validationSchema.map((check) => {
      if (!check.valid) errors.push(check.errorMessage);
    });

    if (errors.length) res.status(400).json({ errorMessage: errors[0] });

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!existingUser) {
      return res.status(401).json({ errorMessage: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res.status(401).json({ errorMessage: "Invalid Credentials" });
    }

    const alg = "HS256";

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({ email: existingUser.email })
      .setProtectedHeader({ alg })
      .setExpirationTime("24h")
      .sign(secret);

    setCookie("jwt", token, { req, res, maxAge: 60 * 6 * 24 });

    return res.status(200).json({
      firstName: existingUser.first_name,
      lastName: existingUser.last_name,
      email: existingUser.email,
      phone: existingUser.phone,
      city: existingUser.city,
    });
  }

  return res.status(404).json("Unknown endpoint");
};

export default handler;
