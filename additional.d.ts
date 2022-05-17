type FileObj = {
    name: string
    mediaType: string
    buffer: Buffer
}

type FileDict = {
    [key: string]: FileObj
}

type Project = {
    name: string
    description: string
    imgUrl: string
    githubUrl?: string
    kaggleUrl?: string
    zipUrl?: string
}

type Organization = {
    name: string
    imgUrl: string
    url: string
}
