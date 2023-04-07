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


export type ProjectMission = {
   fields: {
    title: string
    text: string
    image: {
      metadata: {
        tags: any[]
    }
    fields: {
      title: string
      description: string
      file: {
        fileName: string
        url: string
        details: {
          size: number
          image: {
            width: number
            height: number
          }
        }
      }
    }
   }
}
}


export type ContentfulError = {
  errors: {
    sys: {
      id: string
      type: string
    }
    details: {
      type: string
      linkType: string
      id: string
    }
  }[]
}

export const projectMission = async () => {
  let data = await client.getEntry('1MeKvUhYQl3uwVsIeJJkz9')
.then((entry) => entry as ProjectMission)
.catch((error) => {
  throw new Error(error)
})

return data
}


export type Goals = {
  fields: {
    icon: {
      metadata: {
        tags: any[]
      }
      fields: {
        title: string
        description: string
        file: {
          url: string
          contentType: string
          details: {
            size: number
            image: {
              width: number
              height: number
            }
          }
          fileName: string

        }
      }
    }
  }
  metadata: {
    tags: any[]
  }
  sys: {
    contentType: {
      sys: {
        id: string
        linkType: string
        type: string
      }
      createdAt: string
      envrionment: {
        sys: {
          id: string
          type: string
          linkType: string
        }
      }
      id: string
      locale: string
      revision: number
      space: {
        sys: {
          id:string
          type: string
          linkType: string
        }

      }
        type: string
        updatedAt: string
    }
  }
}

export const goals = async () => {
    let data = await client.getEntries({
      content_type: 'goals'
    })
.then((response) => response.items  )
.catch((error) => {
  throw new Error(error)
})

return data
}

export type PromisesType = {
  image: {
    fields: {
      description: string
      title: string
      file: {
        url: string
        contentType: string
        fileName: string
        details: {
          size: number
          image: {
            width: number
            height: number
          }
        }
      }
    }
  }
  text: string
  title: string
}

export const getPromise = async () => {
 let data = await client.getEntry('46ERGqXHNgnrJ9A1vdrOjy')
.then((entry) => entry.fields as PromisesType)
.catch((error) => {
  throw new Error(error)
})

return data
}

export default heroSection
