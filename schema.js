var sql = require( "seriate" );

var getAllTables = function() {
    return sql.execute( {
        query: sql.fromFile( "./sql/getAllTables" )
    } );
};

var getTable = function( tableName ) {
    return sql.execute( {
        query: sql.fromFile( "./sql/getTableByName" ),
        params: {
            tableName: {
                type: sql.NVARCHAR,
                val: tableName
            }
        }
    } );
};

var getColumns = function( tableName ) {
    return sql.execute( {
        query: sql.fromFile( "./sql/getColumnsByTableName" ),
        params: {
            tableName: {
                type: sql.NVARCHAR,
                val: tableName
            }
        }
    } );
};

module.exports = {
    getAllTables: getAllTables,
    getTable: getTable,
    getColumns: getColumns
};
