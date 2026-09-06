import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export function GET() {
  revalidatePath('/')

  redirect('/')
}
