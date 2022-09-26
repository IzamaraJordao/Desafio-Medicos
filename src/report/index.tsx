import React, { useEffect } from "react";
// import axios from "axios";
// //gerar relatorio

// export function Report() {
//   const [id_doctor, setId_doctor] = React.useState("");
//   const[id_exam_medical,setId_exam_medical] = React.useState("");
//   const [id_appointment_doctor, setId_appointment_doctor] = React.useState("");

//   //trazer os dados do banco
//   const [report, setReport] = React.useState([]);
  
//   const handleReport = async () => {
//     await axios.get('http://localhost:4000/financial')
//     .then((response) => {
//       setReport(response.data);
//     });

   
//   };
//     return(
//       <div>
//         <h1>Relatório</h1>
//         <button onClick={handleReport}>Gerar relatório</button>
//         <table>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Id_doctor</th>
//               <th>Id_exam_medical</th>
//               <th>Id_appointment_doctor</th>
//             </tr>
//           </thead>
//           <tbody>
//             {report.map((report) => (
//               <tr key={report.id}>
//                 <td>{report.id}</td>
//                 <td>{report.id_doctor}</td>
//                 <td>{report.id_exam_medical}</td>
//                 <td>{report.id_appointment_doctor}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
      
//     )

//   }

