// USING ELEMENT ==>
let arr = []
let arr2 = []
let users = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).catch((err) => console.log(err))

    arr = result
    var table = document.getElementById('table');
    arr.forEach((object) => {

        var tr = document.createElement('tr');
        tr.innerHTML = '<td contenteditable="true">' + object.id
            + '</td>' +
            // '<td>' + `<input type="text"   readonly id="" value="${object.title}">` + '</td>' +
            '<td contenteditable="true">' + object.title + '</td>' +
            '<td contenteditable="true">' + object.completed + '</td>' +
            '<td>' + '<button onclick="onEdit(this)" id="editbtn">Edit</button>' + '</td>' +
            '<td>' + '<button onclick="onDelete(this)" id="deletebtn">Delete</button>' + '</td>'

        table.appendChild(tr);
    })




}

const onDelete = (td) => {

    if (confirm('Are you sure to delete this record ?')) {
        let row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        Toastify({
            text: "Record Deleted Succesfully",
            duration: 1500,

            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }

        }).showToast();
    }

}




const onEdit = (td) => {
    let row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);

    console.log(td)



    let field = td.parentElement.parentElement


    let userID = field.firstChild.innerHTML
    let title = field.firstChild.nextElementSibling.innerHTML
    let status = field.firstChild.nextElementSibling.nextElementSibling.innerHTML


    document.getElementById("userid").value = userID
    document.getElementById("title").value = title
    document.getElementById("status").value = status




}












users()




const addUser = () => {
    let newData = {}
    let id = document.getElementById("userid").value
    let title = document.getElementById("title").value
    let status = document.getElementById("status").value

    if (id === "" && title === "" && status === "") {
        alert("pleaase fill all the fields")
    } else {
        Object.assign(newData, { id: id, title: title, completed: status });

        arr2.push(newData)
        arr2.forEach((item) => {
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>' + item.id
                + '</td>' +
                '<td>' + item.title + '</td>' +
                '<td>' + item.completed + '</td>' +
                '<td>' + '<button >Edit</button>' + '</td>' +
                '<td>' + '<button onclick="onDelete(this)" id="delete">Delete</button>' + '</td>'
            table.appendChild(tr);
        })

    }
    document.getElementById("userid").value = ""
    document.getElementById("title").value = ""
    document.getElementById("status").value = ""

}

















/////////////////////////////////////////////////////////////////////////////////////////////////
// USING ARRAY==>
// var array = [];
// const createElement = () => {
//     var table = document.getElementById('table');
//     array.forEach((element) => {
//         var tr = document.createElement('tr');
//         tr.innerHTML = `<td contenteditable="true">${element.id}</td>
//         <td contenteditable="true">${element.title}</td>
//         <td contenteditable="true">${element.completed}</td>
//         <td><button id="remove" onclick="deleteRecord(${element.id},this)">Delete</td>
//         <td><button onclick="updateRecord(${element.id})">Edit</button></td>`;
//         table.appendChild(tr);
//     })
// }


// let getUsers = async () => {
//     let data = await fetch("https://jsonplaceholder.typicode.com/todos")
//     let result = await data.json()
//     array = result
//     console.log(array)
//     createElement()
// }
// getUsers()
// const addUser = () => {
//     let newData = {}
//     let id = document.getElementById("userid").value
//     let title = document.getElementById("title").value
//     let status = document.getElementById("status").value
//     if (!id || !title || !status) {
//         alert("Please Fill in All Fields")

//     }
//     else {
//         Object.assign(newData, { id: id, title: title, completed: status });
//         console.log(newData)
//         array.push(newData)
//         console.log(array)
//         array.forEach((element) => {
//             var tr = document.createElement('tr');
//             tr.innerHTML = `<td contenteditable="true">${element.id}</td>
//         <td contenteditable="true">${element.title}</td>
//         <td contenteditable="true">${element.completed}</td>
//         <td><button id="remove" onclick="deleteRecord(${element.id})">Delete</td>
//         <td><button onclick="updateRecord(${element.id})">Edit</button></td>`;
//             table.appendChild(tr);
//         })
//     }
// }



// const deleteRecord = (element, ele) => {
//     let row = ele.parentElement.parentElement
//     document.getElementById("table").deleteRow(row.rowIndex);
//     alert("Record Deleted Succesfully")
//     let filter = array.filter((ele) => {

//         return ele.id != element
//     })
//     array = filter


//     filter.map((element) => {
//         tr = document.createElement('tr');
//         tr.innerHTML = `<td contenteditable="true">${element.id}</td>
//         <td contenteditable="true">${element.title}</td>
//         <td contenteditable="true">${element.completed}</td>
//         <td><button id="remove" onclick="deleteRecord(${element.id})">Delete</td>
//         <td><button onclick="updateRecord(${element.id})">Edit</button></td>`;
//         table.appendChild(tr)
//     })

//     console.log(filter)


// }
// const updateRecord = () => {


// }
























