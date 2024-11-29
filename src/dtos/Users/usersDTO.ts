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

export interface LoginUserDTO{
    email: string,
    password: string
}

export interface UserResponseDTO{
    name: string,
    email: string,
    banner?: string,
    phoneNumber: string
}