export const to = <T>(promise: Promise<T>) => {
    return promise.then(res => [null, res]).catch(err => [err]);
};

export const findImageUrls = (text: string): string[] => {
    if (!text) return [];

    const urls: string[] = [];
    const iterator = text.matchAll(
        /!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/g
    );
    var result = iterator.next();
    while (!result.done) {
        urls.push(result.value[1]);
        result = iterator.next();
    }
    return urls;
};
