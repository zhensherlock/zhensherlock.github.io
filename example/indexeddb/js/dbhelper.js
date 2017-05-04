var dbHelper = {};
/**
 * 获取数据库名称列表
 */
dbHelper.getDatabaseNames = () => {
    indexedDB.webkitGetDatabaseNames().onsuccess = (event) => {
        let result = event.target.result;
    };
};