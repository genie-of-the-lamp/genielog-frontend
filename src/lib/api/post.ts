import axios from 'axios';

export async function readPost (id: number) {
    const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
}

export interface Post {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}
