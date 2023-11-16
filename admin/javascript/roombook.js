var detailpanel = document.getElementById("guestdetailpanel");

adduseropen = () => {
    detailpanel.style.display = "flex";
}
adduserclose = () => {
    detailpanel.style.display = "none";
}

//search bar logic using js
// const searchFun = () =>{
//     let filter = document.getElementById('search_bar').value.toUpperCase();

//     let myTable = document.getElementById("table-data");

//     let tr = myTable.getElementsByTagName('tr');

//     for(var i = 0; i< tr.length;i++){
//         let td = tr[i].getElementsByTagName('td')[0];

//         if(td){
//             let textvalue = td.textContent || td.innerHTML;

//             if(textvalue.toUpperCase().indexOf(filter) > -1){
//                 tr[i].style.display = "";
//             }else{
//                 tr[i].style.display = "none";
//             }
//         }
//     }

// }
const searchFun = () => {
    let filter = document.getElementById('search_bar').value.trim();
    let myTable = document.getElementById("table-data");
    let tr = myTable.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0]; 
        if (td) {
            let textValue = td.textContent || td.innerText;
            let numericValue = parseFloat(textValue);

            if (!isNaN(numericValue)) {
                if (filter === '' || numericValue === parseFloat(filter)) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none"; 
                }
            } else {
                tr[i].style.display = "";
            }
        }
    }
}

