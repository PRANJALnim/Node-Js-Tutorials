const obj={
    name:'hello',
    key:"A",
    TIme:"any"
}

console.log(obj);

const json_file = JSON.stringify(obj);//object to JSON

console.log(json_file);

const obj_data = JSON.parse(json_file);//JSON to object

console.log(obj_data);