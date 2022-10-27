import axios from 'axios'
import {BaseUrl} from './constence/constence'
const instence = axios.create({
  baseURL:BaseUrl,
})

export default instence