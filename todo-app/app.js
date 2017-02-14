var app = angular.module("todoApp",[]);

app.controller("TodoCtrl",TodoCtrl);

function TodoCtrl(){
    this.editMode=false;
    this.todoList=[{val:"superman"},{val:"batman"},{val:"spiderman"}];

    //add new todo to the todo list
    this.addTodo=function(){
        console.log(this.newTodo);
        this.todoList.push({val:this.newTodo});
        this.newTodo="";
    };

    //delete todo from the todo list
    this.deleteTodo=function(index){
        console.log("Todo to be deleted : "+this.todoList[index]);
        this.todoList.splice(index,1);
        console.log("Updated todo list : ");
        display(this.todoList)
    };

    //edits existing todo from todo list
    this.triggerEditMode=function(){
        this.editMode=!this.editMode;
        console.log("Updated todo list : ");
        display(this.todoList)
    };
}

function display(list){
    console.log("inside display");
    var output=[];
    for(i=0;i<list.length;i++){
        output.push(list[i].val);
    }
    console.log(output);
}