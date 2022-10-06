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
    const dir = "./logs";
    if (fs.existsSync(dir)) {
        let files = fs.readdirSync(dir)
        if (files.length != 0) {
            for (let x = 0; x < files.length; x++) {
                fs.unlinkSync(`./logs/log${x}.txt`)
                console.log(`delete file ...log${x}.txt`)
            }

        }
        else {
            console.log("No files found.")
        }
        fs.rmdirSync(dir)
        console.log("Deleted Logs directory.")
    }
    else {
        console.log("Directory does not exist.")
    }
}

//createLogs();

removeLogs();
