//递归复制文件
function copyFileSync(source, target){
    let stats = fs.statSync(source);
    //判断文件是否存在
    if(!fs.existsSync(target)){
        if(stats.isDirectory()){
            //创建参数所传dir名称的目录
            fs.mkdirSync(target);
        }
    } 
    if(stats.isFile()) {
        //将原文件复制到目标文件下
        fs.copyFileSync(source, target);
    }else if(stats.isDirectory()){
        let currentDirs = fs.readdirSync(source);
        for(let i = 0; i < currentDirs.length; i++){
            copyFileSync(`${source}\\${currentDirs[i]}`, `${target}\\${currentDirs[i]}`);
        }
    }
}