const container = document.getElementById(`container`);

for (let i = 1; i <= 100; i++){
    if (i % 15 == 0){
        let text = `fizzbuzz`;
        container.innerHTML += `<div class="box box --${text}"> ${text}</div>`;   
        console.log (`fizzbuzz`);
    } else if (i % 3 == 0){
        let text = `fizz`;
        container.innerHTML += `<div class="box box --${text}"> ${text}</div>`;
        console.log (`fizz`);
    } else if (i % 5 == 0){
        let text = `buzz`;
        container.innerHTML += `<div class="box box --${text}"> ${text}</div>`;
        console.log (`buzz`);
    } else{
        let text = i;
        container.innerHTML += `<div class="box box --${text}"> ${text}</div>`;
        console.log (i);
    }
}