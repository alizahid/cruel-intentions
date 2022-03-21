import { NextApiHandler } from 'next'

type Data =
  | {
      status: 'ok'
    }
  | {
      error: string
    }

const handler: NextApiHandler<Data> = async (req, res) => {
  if (req.query.secret !== process.env.REFETCH_SECRET) {
    return res.status(401).json({
      error: 'Invalid secret'
    })
  }

  try {
    await res.unstable_revalidate('/')

    res.json({
      status: 'ok'
    })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Something went wrong'

    res.status(500).send({
      error: message
    })
  }
}

export default handler
