import { saveAs } from 'file-saver';

/**
 * @description 根据UTF-8内容导出文件
 * @param {String} content 文件内容
 * @param {String} name 文件名称(带后缀)
 * @param {String} type 文件编码
 */

export const exportFromFile = (content,name = "test.txt",type = "text/plain;charset=utf-8") => {
  var file = new File([content],name, {type: type});
  saveAs(file);
}
/**
 * @description 根据blob内容导出文件
 * @param {String} content 文件内容
 * @param {String} name 文件名称(带后缀)
 * @param {String} type 文件编码
 */

export const exportFromBlob = (content,name = 'test.png') => {
  saveAs(content, name);
}

/**
 * @description 根据内容导出excel文件
 * @param {String} content 文件内容
 * @param {String} name 文件名称(带后缀)
 * @param {String} type 文件编码
 */

 export const exportExcel = (params,name = "test.xls",type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") => {
  const { data,hc } = params;
  let exportPrefix = "\uFEFF";
  const exportHeader = Object.keys(hc).join(',') + '\n';
  const exportColumns = Object.values(hc);
  let exportContent = exportPrefix + exportHeader;
  for (let i in data) {
    for (let c in exportColumns) {
      exportContent += "" + data[i][exportColumns[c]] + ",";
    }
    exportContent += "\n";
  }
  let blob = new Blob([exportContent], {
    type
  });
  saveAs(blob, name);
}