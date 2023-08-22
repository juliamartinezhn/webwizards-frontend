export interface Usuario {
    nombre?: string;
    apellido?: string;
    email?: string;
    plan?: string;
    fechaNacimiento?: string;
    projectsFolder?: Folders;
}

export interface Projects {
    nameProject: string;
}

export interface Snippets {
    nameSnippet: string;
}

export interface Folders {
    _id?: string;
    nameFolder?: string;
    children?: Array<Folders | Projects | Snippets>
}


export interface ContentItem {
    nameFolder?: string;
    nameSnippet?: string;
    nameProject?: string;
    children?: Array<ContentItem>;
}
