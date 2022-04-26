export type LoginReqType = {
    email: string;
    password: string;
};

export interface AuthState {
    token: string | null;
    loading: boolean;
    error: Error | null;
}

export interface RootState {
    auth: AuthState;
}
