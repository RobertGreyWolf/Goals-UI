// const starturl = "http://localhost:8081/todo";
//
// import Constants from '../constants';
//
// class TodoApi
// {
//
//
//     getTodos = async () => {
//       let todos = await fetch (starturl+"/all", Constants.GetRequest)
//           .then((response) => response.json())
//           .then((responseJson) => {
//               return responseJson
//           });
//       return todos;
//     };
//
//     getTodo = async (todoId) => {
//         let todo = await fetch (starturl+"/"+todoId, Constants.GetRequest)
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 return responseJson
//             });
//         return todos;
//     };
//
//     addTodo = async (todo) => {
//         let data = JSON.stringify(todo);
//         let options = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: data
//         };
//
//         let result = await fetch(apiUrl, options)
//             .then((response) => {
//                 if (response.status === 201) {
//                     return response.json();
//                 }
//                 else return response.status;
//             });
//         return result;
//     };
//
//     updateTodo = async (todo) => {
//         let data = JSON.stringify(todo);
//         let url = starturl + "/" + todo.todoId;
//         let options = {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: data
//         };
//
//         let result = await fetch(url, options)
//             .then((response) => {
//                 if(response.status === 200)
//                     return response.json();
//                 else return  null;
//             });
//         return result;
//     };
//
//     deleteTodo = async(bookId) => {
//         let url = starturl + "/" + bookId;
//         let options = {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             }
//         };
//
//         let result = await fetch(url, options)
//             .then((response) => {
//                 return response.status
//             });
//         return result;
//     };
// }
//
// export default TodoApi