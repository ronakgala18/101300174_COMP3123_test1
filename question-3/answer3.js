const fs = require("fs");

const createLogs = () => {
    const file = "./logs";
    if (!fs.existsSync(file)) {
        fs.mkdirSync(file);
    }
    process.chdir(file);
    for (let i = 0; i < 10; i++) {
        fs.writeFile(`log${i}.txt`, `This is the log file ${i}`, (err) =>
            err ? console.error(`Error creating file 'log${i}.txt'`) : console.log(`log${i}.txt`)
        );
    }
};

const removeLogs = () => {
    const target = "./logs";
    if (fs.existsSync(target)) {
        process.chdir(target);
        fs.readdir(process.cwd(), (err, files) => {
            files.forEach((file) => {
                fs.unlink(file, (err) =>
                    err ? console.error(`Error deleting file '${file}'`) : console.log(`Deleting file '${file}'`)
                );
            });
            
        });
        fs.rm(target, { recursive: true, force: true }, err => {
            // print error if any otherwise print success message
            err ? console.error(err.message) : console.log(`directory ${target} was deleted!`)
        })
    }
};
removeLogs();
//createLogs();
