import { verifyAccessToken } from '../helpers/jwt-helper';

export const authenticateToken = (req: any, res: any, next: any) => {
    const token = req.cookies.user_token;

    if (!token) {
        return res.sendStatus(401);
    }

    const result = verifyAccessToken(token);

    if (!result.success) {
        return res.status(403).json({ error: result.error });
    }
    
    req.user = result.data;
    next();
}