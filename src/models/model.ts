export interface Usuario {
    nombre?: string;
    apellido?: string;
    email?: string;
    plan?: string;
    fechaNacimiento?: string;
    projectsFolder?: Folders;
}

export interface Projects {
    _id?: string;
    nameProject?: string;
    html?: string;
    css?: string;
    js?: string;
}

export interface Snippets {
    _id?: string;
    nameSnippet: string;
}

export interface Folders {
    _id?: string;
    nameFolder?: string;
    children?: Array<Folders | Projects | Snippets>
}


export interface ContentItem {
    _id?: string;
    nameFolder?: string;
    nameSnippet?: string;
    nameProject?: string;
    children?: Array<ContentItem>;
}
