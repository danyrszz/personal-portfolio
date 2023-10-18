export async function POST(request: Request) {
  const body = await request.json()
  console.log(body)

  const resp = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    body: body
  })

  const data = await resp.json()
  console.log(data)

  return Response.json({data})
}