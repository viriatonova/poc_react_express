import bcrypt from "bcrypt";

/**
 * 
 * @param username 
 * @returns 
 */
export const checkUsername = (username: string) => {
    return username.length < 3 ? false : true
}

/**
 * 
 * @param password 
 * @returns 
 */
export const checkPassword = (password: string) => {
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