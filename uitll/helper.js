
import axios from 'axios';
function seachGit(){
  return axios.get('https://api.github.com/users/zhou1112')
  .then((res) =>
      ({data:res.data})
  )
  .catch(function (error) {
    alert(error);
  })
}
export {seachGit}
