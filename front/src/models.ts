export type User = {
    email: string;
    password: string;
    nickname: string;
    statut: Statut;
}

export type Statut = {
    statut:"admin:" | "user";
}