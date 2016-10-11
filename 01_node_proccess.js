'use strict';

function singleThread() {
    process.argv[2] = 'algo aqui';

    console.log(process.argv[2]);
}

singleThread();
