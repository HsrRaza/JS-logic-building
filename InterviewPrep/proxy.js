//  proxy is a kind of checkout whether to allow or not to uodate things 


const p1 = {
    fname: "Piyush",
    lname: "Garg",
    age: 10,
}

//  proxy takes where to apply the rules variable and handler fnc
const p1Proxy = new Proxy(p1, {
    get(target, prop) {
        // console.log({target, prop});
        if (prop in target) return Reflect.get(target, prop);   // reflect is used to set default value in proxy
        return false
    },
    set(target, prop, value) {
        if (!(prop in target)) throw new Error(`${prop} does not exits`)

        switch (prop) {
            case 'fname':
            case 'lname':
                if (typeof value !== 'string') throw new Error(`${prop} must be  a string`)
                break

            case 'age':
                if (typeof value !== 'number') throw new Error(`${prop} must be  a number`)
                if (value <= 0)  throw new Error(`${prop}  must be  greater than  zero`)
        }

        target[prop] = value;  // we can use reflect here see next line
        Reflect.set(target, prop, value)

    }

})


p1Proxy.age =  80;
// p1Proxy.fname = 10

console.log(p1Proxy);
