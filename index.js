const data = [
  {
    'SKU':'AP-005158',
    'IMG':'https://images.unsplash.com/photo-1606248897020-696650b29ee1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    'Product_Name':'Macbook',
    'Price':'29,000',
    'Stock':'12',
    'Status':'Active'
  },
  {
    'SKU':'AP-002154',
    'IMG':'https://images.unsplash.com/photo-1582980975488-ef8c0570d23c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80',
    'Product_Name':'iPhone',
    'Price':'34,900',
    'Stock':'12',
    'Status':'Active'
  },
  {
    'SKU':'AP-006345',
    'IMG':'https://images.unsplash.com/photo-1552238979-402eb7a9258c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
    'Product_Name':'iPad',
    'Price':'11,900',
    'Stock':'8',
    'Status':'Inactive'
  },
  {
    'SKU':'AP-008744',
    'IMG':'https://images.unsplash.com/photo-1600375226700-5ce19fbe1a6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    'Product_Name':'Airpod 3',
    'Price':'6,900',
    'Stock':'15',
    'Status':'Active'
  },
  {
    'SKU':'AP-009452',
    'IMG':'https://images.unsplash.com/photo-1593442607435-e4e34991b210?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=885&q=80',
    'Product_Name':'Airpod Pro',
    'Price':'9,500',
    'Stock':'20',
    'Status':'Active'
  },
  {
    'SKU':'AP-000000',
    'IMG':'https://www.marks-iplaw.jp/wp-content/uploads/2018/02/apple-inc-1.jpg',
    'Product_Name':'Apple Product',
    'Price':'0',
    'Stock':'0',
    'Status':'Inactive'
  },
  {
    'SKU':'AP-000000',
    'IMG':'https://www.marks-iplaw.jp/wp-content/uploads/2018/02/apple-inc-1.jpg',
    'Product_Name':'Apple Product',
    'Price':'0',
    'Stock':'0',
    'Status':'Inactive'
  },
  {
    'SKU':'AP-000000',
    'IMG':'https://www.marks-iplaw.jp/wp-content/uploads/2018/02/apple-inc-1.jpg',
    'Product_Name':'Apple Product',
    'Price':'0',
    'Stock':'0',
    'Status':'Inactive'
  },
  {
    'SKU':'AP-000000',
    'IMG':'https://www.marks-iplaw.jp/wp-content/uploads/2018/02/apple-inc-1.jpg',
    'Product_Name':'Apple Product',
    'Price':'0',
    'Stock':'0',
    'Status':'Inactive'
  },
  {
    'SKU':'AP-000000',
    'IMG':'https://www.marks-iplaw.jp/wp-content/uploads/2018/02/apple-inc-1.jpg',
    'Product_Name':'Apple Product',
    'Price':'0',
    'Stock':'0',
    'Status':'Inactive'
  },
  {
    'SKU':'AP-000000',
    'IMG':'https://www.marks-iplaw.jp/wp-content/uploads/2018/02/apple-inc-1.jpg',
    'Product_Name':'Apple Product',
    'Price':'0',
    'Stock':'0',
    'Status':'Inactive'
  },
  {
    'SKU':'AP-000000',
    'IMG':'https://www.marks-iplaw.jp/wp-content/uploads/2018/02/apple-inc-1.jpg',
    'Product_Name':'Apple Product',
    'Price':'0',
    'Stock':'0',
    'Status':'Inactive'
  },
  {
    'SKU':'AP-000000',
    'IMG':'https://www.marks-iplaw.jp/wp-content/uploads/2018/02/apple-inc-1.jpg',
    'Product_Name':'Apple Product',
    'Price':'0',
    'Stock':'0',
    'Status':'Inactive'
  },
  {
    'SKU':'AP-000000',
    'IMG':'https://www.marks-iplaw.jp/wp-content/uploads/2018/02/apple-inc-1.jpg',
    'Product_Name':'Apple Product',
    'Price':'0',
    'Stock':'0',
    'Status':'Inactive'
  },
  {
    'SKU':'AP-000000',
    'IMG':'https://www.marks-iplaw.jp/wp-content/uploads/2018/02/apple-inc-1.jpg',
    'Product_Name':'Apple Product',
    'Price':'0',
    'Stock':'0',
    'Status':'Inactive'
  },
  {
    'SKU':'AP-000000',
    'IMG':'https://www.marks-iplaw.jp/wp-content/uploads/2018/02/apple-inc-1.jpg',
    'Product_Name':'Apple Product',
    'Price':'0',
    'Stock':'0',
    'Status':'Inactive'
  },
  {
    'SKU':'AP-000000',
    'IMG':'https://www.marks-iplaw.jp/wp-content/uploads/2018/02/apple-inc-1.jpg',
    'Product_Name':'Apple Product',
    'Price':'0',
    'Stock':'0',
    'Status':'Inactive'
  }
]



function myFunction() {
  for (let i = 0; i < data.length; i++) {
    var table = document.getElementById("data-lists");
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var vdata = data[i];
    cell1.innerHTML = vdata['SKU'];
    cell2.innerHTML = "<img src='"+ vdata['IMG'] +"' alt='' class='rounded-3' style='width: 70px; height: 35px; object-fit: cover;'>";
    cell3.innerHTML = vdata['Product_Name'];
    cell4.innerHTML = vdata['Price'];
    cell5.innerHTML = vdata['Stock'];
    if (vdata['Status'] == 'Active') {
      cell6.innerHTML = "<button class='btn btn-sm btn-success'>Active</button>";
    } else if (vdata['Status'] == 'Inactive') {
      cell6.innerHTML = "<button class='btn btn-sm btn-danger'>Inactive</button>";
    // cell6.innerHTML = vdata['Status'];
    }
  }
}