//==================================================================================
// @author Thitipong Samranvanich 
// @since  2019-06-05  
// @purpose  for Demo read database from MySQL  , use Promise()  to sequence reading  
// @note :  run with  ,  >node read_mysql.js   ( no database provided ) 
//==================================================================================
// ===============================================================
// REF FROM  https://codeburst.io/node-js-mysql-and-promises-4c3be599909b
// ===============================================================
var mysql = require('mysql');
var config = {
  host: "localhost",
  user: "username",
  password: "password",
  database: "database_name"
//  ,encoding: "utf8"
}

let rowsA , rowsB ;
var con = mysql.createConnection(config);
//query("SET NAMES utf8")
query("SELECT code,sort_number,status,name,fullname from applications" )
.then( rows => {
	rowsA = rows 
	console.log( "RESULT A " )
	return query("SELECT code FROM applications")
})
.then( rows => {
	console.log( "RESULT B " )
	rowsB = rows 
})
.then( () => { 
	console.log(">> SHOW ROWS A , B ")
	console.log(rowsA)
	console.log(rowsB) 
	return close()
})
.catch( err => {
	console.log("CATCH CLOSE , " + err)
        // handle the error
	return done()
});
console.log ("=== END TAIL OF MAIN == ")

function query(sql,args){
	console.log("RUNSQL " + sql );
	return new Promise( ( resolve, reject) =>{
 		con.query(sql, args,(err, rows) => {
			if(err){	
				return reject(err);
			}else{
				resolve(rows);
			} 			
		} ) ; 
	});
}

function close() {
	console.log ("RUN CLOSE()")
        return new Promise( ( resolve, reject ) => {
             console.log("NEW PROMISE // IN CLOSE()")
	     con.end( err => {
                if ( err ){
		    console.log("CLOSE() EJECT")		
                    return reject( err );
                }else{
			console.log("CLOSE() RESOLVE")
			resolve();
		}
            });
            console.log("AFTER CON.CLOSE() ")
        } );
}

function  done(){
        return new Promise( async ( resolve, reject ) => {
                console.log( "db state = " + con.state )
		console.log("done() ")
		await close()
		console.log("db state = " +  con.state )
		//resolve()
        } );
}

  
