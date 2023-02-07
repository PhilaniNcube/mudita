type HeroData ={
    fields: {
       boldTitle: string,
       buttonText: string,
       subTitle: string,
       title: string,
       backgroundImage: {
        fields: {
          description: string,
          file: {
            url: string,
            contentType: string,
            fileName: string,
            details: {
              size: number,
              image: {
                width: number,
                height: number
              }
            }
          },
          title: string,
        }
       }
    },
    sys: {
      updatedAt: string,
      id: string,
      type: string,
    }
  }
