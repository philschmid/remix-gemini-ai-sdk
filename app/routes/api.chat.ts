import { ActionFunctionArgs } from '@remix-run/node'
import { google } from '@ai-sdk/google'
import { streamText } from 'ai'

const model = google('gemini-1.5-pro-latest')

export async function action({ request }: ActionFunctionArgs) {
  const { messages } = await request.json()

  console.log(messages)

  const result = await streamText({
    model,
    messages,
  })

  return result.toDataStreamResponse()
}
