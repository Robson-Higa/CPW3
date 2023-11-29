export type work =  {

    title: string
    authors: string[]
}

export const getWork = (obj: any) => {

    const { title, authors } = obj
    const work: work = { title, authors }
    return work
}