import { create } from 'zustand';
import api from '../api'; 
import { REFRESH_TOKEN, ACCESS_TOKEN, ROLE } from '../constants';
import { jwtDecode } from 'jwt-decode';

export const useAuthStore = create((set) => ({
    isAuthorized: false,

    setAuthorized: (value) => set({ isAuthorized: value }),
    
    refreshToken: async () => { 
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            const res = await api.post('/api/token/refresh/', {
                refresh: refreshToken,
            });
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                set({ isAuthorized: true });
                
            } else {
                set({ isAuthorized: false });
            }
        } catch (error) { 
            console.log(error);
            set({ isAuthorized: false });
        }
    },

    auth: async () => { 
            console.log("in auth")
            const token = localStorage.getItem(ACCESS_TOKEN);
            if (!token) { 
                set({ isAuthorized: false });
                return;
            }
            const decoded = jwtDecode(token);
            const tokenExpiration = decoded.exp;
            const now = Date.now() / 1000;
    
            if (tokenExpiration < now) {
                await refreshToken();
            } else {
                set({ isAuthorized: true });
                console.log("set isAuthorized")
            }
        }
    
}))

