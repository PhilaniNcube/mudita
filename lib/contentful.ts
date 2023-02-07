import {createClient} from "contentful"

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE as string,
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string
})

export default client
