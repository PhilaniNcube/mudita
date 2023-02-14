import client from './contentful'

const heroSection = async () => {
  let data = await client.getEntry('IQmCyjxK4buckNLeC1h14')
.then((entry) => console.log(entry))
.catch(console.error)

return data
}

export const contentBoxesOne = async () => {
 let data =  client.getContentType('contentBoxes')
.then((contentType) => console.log(contentType))
.catch(console.error)

return data
}

export default heroSection
