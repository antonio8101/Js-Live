const populatePersonsList = function (persons){

    function toListItem({name, age, city}) {
        return `<li class="list-group-item d-flex">
                       <div>${name} ${city ? `(${city})` : ''}</div>
                       <div class="ms-auto">${age} anni</div>
                    </li>`;
    }

    if (persons instanceof Array){
        const ul = document.getElementById("persons-list");

        ul.innerHTML = persons
            .filter(p => p instanceof Person)
            .sort((a, b) => a.age - b.age)
            .map(toListItem)
            .join("");
    }
}

export default populatePersonsList;

export const a = "test";
export let b = "something";
export const populateOptions = function (persons){
    if (persons instanceof Array){
        const form = document.forms.item(1);
        const select = form.elements[0];
        const newOptions = persons
            .filter(p => p instanceof Person)
            .sort((a, b) => a.age - b.age)
            .map((p, index) => new Option(p.name, index.toString()));
        const firstChild = [select.children[0]];
        const t = firstChild.concat(newOptions);
        select.innerHTML = ""; // svuota semplice
        t.forEach(i => {
            select.append(i);
        })
    }
}

class Something{}

export function test(b){
    if (b instanceof Something){
        //
    }
}
