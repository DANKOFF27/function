function createSumFunction() {
    let total = 0;

    return function(value) {
        total += value;
        return total;
    };
}

const sum = createSumFunction();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));







/* let number1 = prompt('number');
let number2 = prompt('number');
let number3 = prompt('number');

alert((Number(number1) + Number(number2) + Number(number3)) / 2); */

/* let rik = prompt('Pік народження?');


if(rik === null){
    alert(`Шкода, що Ви не захотіли ввести свій(ю) дату народження`); 
    } else if (rik != null){
        let city = prompt('В якому місті ти живеш?');
        if(city === null){
            alert(`Шкода, що Ви не захотіли ввести свійє місто`);
        } else if(city != null){
            let sport = prompt('Улюблений вид спорту?');
            if (sport ===  null){
                alert(`Шкода, що Ви не захотіли ввести свій вид спорту`);
            } else if(sport != null){
                if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
                    if(sport === "Box" || sport === "MMA" || sport === "Judo"){
                        if(sport === "Box"){
                            alert(`${rik}\nТи живеш у столиці ${city}\nКруто! Хочеш стати Олександром Усиком?`);
                        } else if(sport === "MMA"){
                            alert(`${rik}\nТи живеш у столиці ${city}\nКруто! Хочеш стати Шоном Стриклендом?`);
                        } else if(sport === "Judo"){
                            alert(`${rik}\nТи живеш у столиці ${city}\nКруто! Хочеш стати Арманом Адамяном?`);
                        }
                    } else{
                        alert(`${rik}\nТи живеш у столиці ${city}`);
                    }
                } else {
                    if(sport === "Box" || sport === "MMA" || sport === "Judo"){
                        if(sport === "Box"){
                            alert(`${rik}\nТи живеш у місті ${city}\nКруто! Хочеш стати Олександром Усиком?`);
                        } else if(sport === "MMA"){
                            alert(`${rik}\nТи живеш у місті ${city}\nКруто! Хочеш стати Шоном Стриклендом?`);
                        } else if(sport === "Judo"){
                            alert(`${rik}\nТи живеш у місті ${city}\nКруто! Хочеш стати Арманом Адамяном?`);
                        }
                    } else{
                        alert(`${rik}\nТи живеш у місті ${city}`);
                    }
                }
            }
        }
    }
            
            
            
             */

/* } else (rik === null){
    alert(`Шкода, що Ви не захотіли ввести свій(ю) дату народження`);
} else if (city === null){
    alert(`Шкода, що Ви не захотіли ввести свій(ю) місто`);
} else if (sport === null){
    alert(`Шкода, що Ви не захотіли ввести свій(ю) вид спорту`); */