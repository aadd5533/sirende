let targetPackageName = "com.sup.android.superb";  // 将这个替换为你想检测的应用包名

// 获取当前运行的应用包名
let currentApp = currentPackage();

// 判断当前运行的应用是否为目标应用
if (currentApp === targetPackageName) {
    toast("目标应用正在运行");
} else {
    toast("目标应用未在运行");
}