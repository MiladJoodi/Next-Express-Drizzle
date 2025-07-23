export const randomID = (): string => {
    return new Date().getTime().toString(36)
}