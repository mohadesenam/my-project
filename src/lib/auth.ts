import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const SECRET = process.env.JWT_SECRET || 'dev-jwt-secret-change-me';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'stratech-admin-2024';
const COOKIE_NAME = 'stratech_admin';

export function verifyPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export function createToken(): string {
  return jwt.sign({ role: 'admin' }, SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): boolean {
  try {
    jwt.verify(token, SECRET);
    return true;
  } catch {
    return false;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyToken(token);
}

export const ADMIN_COOKIE = COOKIE_NAME;
