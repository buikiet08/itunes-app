import { MUSIC_API } from "@/config/api";
import { http } from "@/config/http"

export const musicService = {
    getMusic(query={}) {
        return http.get('https://itunes.apple.com/search', {
            params: query,
        })
    },
    getDetail(id) {
        return http.get(`https://itunes.apple.com/lookup?id=${id}`)
    }
};