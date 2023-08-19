export const showType = (type) =>{
    switch(type){
        case "old":
            return "پست قدیمی";
        case "new":
            return "پست تاپ";
        case "top":
            return "پست جدید";
        default:
            return "ذخیره نشده"
    }

}