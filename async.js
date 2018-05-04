async function serial() {
    const v1 = await wait(1000, 1);
    const v2 = await wait(1000, 2);
    const v3 = await wait(1000, 3);
    return v1 + v2 + v3;
}

async function parallel(n) {
    const v1 = wait(1000, 1);
    const v2 = wait(1000, 2);
    const v3 = wait(1000, 3);
    return await v1 + await v2 + await v3;
}

function wait(t, v) {
    console.log("WAIT "+t+" "+v);
    let p = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(v);
        }, t);
    });
    return p;
}

console.time("t");
serial().then(function(n) {
    console.timeEnd("t");
    console.log(n);
});

console.time("t2");
parallel().then(function(n) {
    console.timeEnd("t2");
    console.log(n);
});