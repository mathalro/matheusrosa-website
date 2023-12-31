import jwt from 'jsonwebtoken';
import settings from '../settings';
import User from '../models/user';

export const verifyAccessToken = (token: string) => {
    const secret = settings.JWT_SECRET;

    try {
        const decoded = jwt.verify(token, secret);
        return { success: true, data: decoded };
    } catch (error) {
        return { success: false, error: (error as Error).message };
    }
}

export const createAccessToken = (user: User) => {
    const jwtPaylod = {
        userId: user.userId
    }

    const options = { expiresIn: '1h' };
    const userJwt = jwt.sign(jwtPaylod, "secret", options);

    return userJwt;
}