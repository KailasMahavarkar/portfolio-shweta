export interface IProjectConfig {
    projects: IProject[];
};

export interface IProject {
    title: string;
    info: string;
    website: string;
    github: string;
    apidoc: string;
    imageurl: {
        light: string;
        dark?: string;
    };
    maintenance: boolean;
    techstack: string[];
}
