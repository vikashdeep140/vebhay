import { NextResponse } from "next/server"
import mysql from "mysql2/promise"

export async function POST(req: Request) {

  const body = await req.json()

  const { name, email, mobile, subject, message } = body

  try {

    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "vibhay"
    })

    await db.execute(
      "INSERT INTO contacts (name,email,mobile,subject,message) VALUES (?,?,?,?,?)",
      [name, email, mobile, subject, message]
    )

    return NextResponse.json({
      message: "Message sent successfully"
    })

  } catch (error) {

    console.error(error)

    return NextResponse.json(
      { message: "Database error" },
      { status: 500 }
    )

  }
}