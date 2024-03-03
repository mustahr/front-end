export interface Trip {
    id: string;
    title: string;
    description: string;
    moreInfos: string;
    keywords: string;
    Images: Image[];
};

export interface Image {
    id: string;
    url: string;
}