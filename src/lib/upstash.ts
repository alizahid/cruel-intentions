import Redis from 'ioredis'

class Upstash {
  private client = new Redis(process.env.UPSTASH_URL)

  async get<T>(key: string): Promise<T | void> {
    const value = await this.client.get(key)

    if (value) {
      return JSON.parse(value)
    }
  }

  async set<T>(key: string, value: T): Promise<this> {
    await this.client.set(key, JSON.stringify(value))

    return this
  }
}

export const upstash = new Upstash()
