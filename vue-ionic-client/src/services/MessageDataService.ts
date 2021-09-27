import http from '@/http-common';
import IMessageData from '@/types/message.type';


class MessageDataService {
    getAll() {
        return http.get("/messages");
    }

    get(id: string) {
        return http.get(`/messages/${id}`);
    }

    create(data: IMessageData) {
        return http.post("/messages", data);
    }

    update(data: IMessageData, id: string) {
        return http.put(`/messages/${id}`, data);
    }

    delete(id: any) {
        return http.delete(`/messages/${id}`);
    }

    deleteAll() {
        return http.delete("/messages");
    }

    findByName(name: string) {
        return http.get(`/messages?name=${name}`);
    }
}

export default new MessageDataService();
