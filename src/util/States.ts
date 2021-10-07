export interface User {
    username: string,
    password: string
}

export const initialUserState: User = {
    username: '',
    password: ''
}