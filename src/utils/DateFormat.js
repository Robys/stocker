

export default function DateFormat(){
    let objectDate = new Date();

    let day = objectDate.getDate();
    let month = objectDate.getMonth();
    let year = objectDate.getFullYear();

    let format = `${day}-${month}-${year}`;

    return format
}