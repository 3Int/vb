export function* iter(list: any[]){
    let index = 0;
    while(true){
        yield list[index % list.length];
        index++;
    }
}