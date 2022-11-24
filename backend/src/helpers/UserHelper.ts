import bcrypt from "bcrypt";

export type checkUsernameFn = (username: string) => boolean
export type checkPasswordFn = (password: string) => boolean

/**
 * 
 * @param username 
 * @returns 
 */
export const checkUsername: checkUsernameFn = (username) => {
    const check = username.length < 3 ? false : true
    return check
}

/**
 * 
 * @param password 
 * @returns 
 */
export const checkPassword: checkPasswordFn = (password: string) => {
    const checkLength = password.length < 8 ? false : true
    const re = /[A-Z\d]/
    const caracters = re.test(password)
    if (checkLength && caracters) return true
    return false 
}

/**
 * 
 * @param password 
 * @returns 
 */
export const hashPassword = (password: string) => {
    const salt = bcrypt.genSaltSync(15);
    const hash = bcrypt.hashSync(password, salt)
    return hash
}