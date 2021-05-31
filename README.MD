### 安装

通过npm安装
```
npm install file-export
```

### 用法

```
import { exportExcel } from "file-export";

const data = [
  { 
    name:"张三",
    age:18,
    age:'男',
    mobile:18272879991
  },
  { 
    name:"张三",
    age:18,
    age:'男',
    mobile:18272879991
  },
  { 
    name:"张三",
    age:18,
    age:'男',
    mobile:18272879991
  }
]


let params = {
  "姓名": "name",
  "年龄": "age",
  "性别": "sex",
  "电话": "mobile",
};
exportExcel(
  {
    data: data,
    hc: params
  },
  "ex.xls"
);

```

### 事件

| 事件                             | Description | 参数                                                                                                                   |
|--------------------------------|-------------|----------------------------------------------------------------------------------------------------------------------|
| exportFromFile(content,name,type) | 导出文件        | content:文件内容。name:导出文件名称。type:文件编码类型(默认:text/plain;charset=utf-8)                                                    |
| exportExcel(options,name,type) | 导出excel     | options:excel数据(表头，表体)。name:导出文件名称。type:文件编码类型(默认:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet) |

