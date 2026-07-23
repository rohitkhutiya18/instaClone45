interface postImage{
    url:string;
    publicId:string
}

export interface postInterface{
postComment: string
post_caption: string;
post_createdAt: string;
post_id: string;
post_images: postImage[];
postlike: string;
}