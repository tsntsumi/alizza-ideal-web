export interface ContentsQuery {
    mdx: mdxNode
    allFile: allFileNode
}

export interface ContentsListQuery {
    allMdx: allMdxListNode
}

export interface mdxNode {
    slug: string
    body: string
    fields: fieldsNode
    frontmatter: frontmatterNode | null
}

export interface fieldsNode {
    sourceName: string
}

export interface frontmatterNode {
    title: string
    date: any | null
    description: string | null
    credit: string | null
    image: imageNode | null
    banner: imageNode | null
}

export interface imageNode {
    publicURL: string | null
    childImageSharp: childImageSharpNode | null
}

export interface childImageSharpNode {
    gatsbyImageData: any | null
    id: string
}

export interface gatsbyImageDataNode {
    width: number
    placeholder: any
    layout: any
    quality: number
}

export interface allFileNode {
    edges: fileEdgeNode[]
}

export interface fileEdgeNode {
    node: fileNode
}

export interface fileNode {
    relativeDirectory: string
    sourceInstanceName: string
    childImageSharp: childImageSharpNode
    base: string
    name: string
    ext: string
    publicURL: string
}

export interface allMdxListNode {
    edges: mdxEdgeListNode[]
}

export interface mdxEdgeListNode {
    node: mdxListNode
}

export interface mdxListNode {
    id: string
    frontmatter: frontmatterListNode
    fields: mdxFilesNode
}

export interface frontmatterListNode {
    title: string
    date: any | null
    description: string | null
    credit: string | null
    banner: imageNode | null
}

export interface mdxFilesNode {
    slug: string | null
}
