// async function fetchUserData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const users = await response.json();
//       console.log(users)

//       const userTable = document.getElementById('user-table').getElementsByTagName('tbody')[0];
      
//       users.forEach(user => {
//         const { name, email, phone } = user;
//         const row = userTable.insertRow(-1);
//         const nameCell = row.insertCell(0);
//         const emailCell = row.insertCell(1);
//         const phoneCell = row.insertCell(2);
//         nameCell.innerHTML = name;
//         emailCell.innerHTML = email;
//         phoneCell.innerHTML = phone;
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   fetchUserData();

  


















  async function apifetch(){
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const users = await response.json();
   console.log(users)
  }
  apifetch();