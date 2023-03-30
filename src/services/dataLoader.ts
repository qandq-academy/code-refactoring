
let count=1;

export class DataModel {
    constructor(title: string, data:number[]){
        this.title = title;
        this.data = data;
    }
    title: string = "";
    data: number[] = [];
}

const apiEndpoint = () => {
    count++
    
    let data = [];
    for (let i = 0; i < 20; i++) {
        data.push(Math.floor(Math.random() * 100) + 1);
    }

    return new DataModel('Run ' + count, data);
}


const fetchData = () => {
    return apiEndpoint();
}

export default fetchData;