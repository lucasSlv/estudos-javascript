function inverter(value) {
    let o = '';
    for (let i = value.length - 1; i >= 0; i--) {
        o += value[i];
    }
    return o;
}
console.log(inverter("Mirelle"));