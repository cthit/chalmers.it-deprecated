export interface Post {
    id: string;
    user_id: string;
    group_id: string;
    title: string;
    body: string;
    url: string;
    image_urls?: string[];
    created_at: string;
    updated_at?: string;
}
