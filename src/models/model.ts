export interface Usuario {
    _id?: string;
    nombre?: string;
    apellido?: string;
    email?: string;
    plan?: string;
    fechaNacimiento?: string;
    projectsFolder?: Folders;
    totalProjects?: Number;
}

export interface Projects {
    _id?: string;
    nameProject?: string;
    creator?: Usuario;
    created_at?:Date;
    modified_at?:Date;
    html?: string;
    css?: string;
    js?: string;
    collaborators?: Array<Usuario>;
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
