export type People = {
    id?: number,
    name: string,
    cpf: string,
    age: number,
    role_id?: PeopleEnum,
}

export enum PeopleEnum {
    ADMIN = 1,
    USER ,
}

