import { revalidatePath } from 'next/cache'

export function GET() {
  revalidatePath('/')

  return new Response('Done')
}
