import {createClient} from "contentful"

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE!,
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!
})

export default client
