try{
    console.log("Try block");
    throw new Error("Some thing went wrong.")
}
catch(error){
    console.log("error cought: ",error.message);
}
finally{
    console.log("Finally block executed.")
}