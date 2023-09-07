interface IProduct {
    title: string;
    photos: [{ uid: string; url: string; name:string; }];
    content: string;
    price: number;
    slug: string;
    uid: string;
}

export { IProduct }