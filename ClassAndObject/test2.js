function Mouse(name, age) {
    this.name = name
    this.age = age
    this.fun = () => {
        console.log(this.name)
    }
}

let mouse = new Mouse('Jerry', 1);
mouse.fun();
