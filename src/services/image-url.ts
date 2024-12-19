const getCroppedImageUrl = (url: string) => {

    // const target = 'media/'; //better to replace multiple uses with const value
    // const index = url.indexOf(target) + target.length;

    // return url.slice(0, index) + 'crop/600/400' + url.slice(index); <--- missing / at end of 400; Need to watch it

    const target = 'media/';
    
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;