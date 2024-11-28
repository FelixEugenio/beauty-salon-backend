export interface CreateUserDTO{
    name: string,
    email: string,
    password: string,
    banner?: string,
    phoneNumber: string
}

export interface UpdateUserDTO{
    name: string,
    email: string,
    password: string,
    banner?: string,
    phoneNumber: string
}