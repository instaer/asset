import * as XLSX from 'xlsx';

self.onmessage = async function (e) {
    try {
        const {arrayBuffer, sheetNumber = 0} = e.data;
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, {type: 'array'});

        // 检查 sheet 序号是否有效
        if (sheetNumber >= workbook.SheetNames.length) {
            throw new Error(`Sheet number ${sheetNumber} is out of range. Total sheets: ${workbook.SheetNames.length}`);
        }

        const worksheet = workbook.Sheets[workbook.SheetNames[sheetNumber]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        self.postMessage({
            type: 'success',
            data: jsonData,
            sheetInfo: {
                total: workbook.SheetNames.length,
                names: workbook.SheetNames
            }
        });
    } catch (error) {
        self.postMessage({type: 'error', error: error.message});
    }
};