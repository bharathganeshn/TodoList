let todo=[]

let req = prompt("Please enter the request");

while(true){
    if(req == "quit"){
        console.log("Quitting app");
        break;
    }
    if(req == 'list'){
        console.log('-------------');
        for(let i =0 ;i< todo.length;i++){
            console.log(i , todo[i]);
        } 
        console.log('-------------');
    }else if(req == 'add'){
        let taskk = prompt("Enter the task to be added");
        todo.push(taskk);
        console.log("Task added");
    } else if(req == 'delete'){
        let idx = prompt("Enter the index to be deleted");
        todo.splice(idx,1);
        console.log("!! Task Deleted !!");
    } else{
        console.log("Wrong Choice");
    }

    req = prompt("Please enter your request");
}
