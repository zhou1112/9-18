import axios from 'axios'

function uaxios(axx){
    let ass=`https://api.github.com/users/${axx}`
    return axios.get(ass)
        .then((res)=>({
            data:res.data
        }))
        .catch(()=>{
            alert('404')
        })

}

function carddata(){
    return axios.get(`https://raw.githubusercontent.com/nuancheng/dome-data/master/Carddata.json?${Math.random()}`)
    .then((res)=>({
            as:res.data
        }))
        .catch(()=>{
            alert('404')
        })
}

function gitmd(xss){
    let ass=`https://raw.githubusercontent.com/nuancheng/dome-data/master/BIOG/${xss}.md?${Math.random()}`
    return axios.get(ass)
    .then((md)=>({
            as:md.data
        }))
        .catch(()=>{
            alert('404')
        })
}
export { carddata,uaxios,gitmd }
