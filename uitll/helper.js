
import axios from 'axios';
// function seachGit(){
//   return axios.get('https://api.github.com/users/zhou1112')
function seachGit (add) {
   let address = `https://api.github.com/users/${add}`;
   return axios.get(address)
  .then((res) =>
      ({data:res.data})
  )
  .catch(function (error) {
    alert(error);
  })
}
export {seachGit}


function getJson() {
   let address = `https://raw.githubusercontent.com/newming/demodata/master/card.json`;
   return axios.get(address)
     .then( (res) => (
       { getJson:res.data }
     ))
     .catch(function (error) {
       alert(error);
     });
 }

 export { getJson };
