export type ProfileData = {
    firstName: string
    lastName: string
    role: UserRole
}

export enum UserRole {
    STUDENT='student',
    PARENT='parent',
    TUTOR='tutor',
    ADMIN='admin',
}