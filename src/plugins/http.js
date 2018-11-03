// 将axios改成插件
// 导入axios
import axios from 'axios'
// 声明一个对象
const HttpTool = {}
HttpTool.install = (Vue)=>{
    // 用vue给的方法把axios改成插件
    axios.defaults.baseURL= 'http://localhost:8888/api/private/v1/'
    Vue.prototype.$http = axios
}
// 导出axios
export default HttpTool
