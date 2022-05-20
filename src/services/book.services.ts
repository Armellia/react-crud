import axios from "axios";
import { book } from "../models/book.model";

class BookServices{
    url="http://localhost:3001/books"
    getAll(){
        return axios.get(this.url)
    }
    getId(id:any){
        return axios.get(`${this.url}/${id}`)
    }
    create(book:book){
        return axios.post(this.url,book)
    }
    update(id:any,book:book){
        return axios.put(`${this.url}/${id}`,book)
    }
    delete(id:any){
        return axios.delete(`${this.url}/${id}`)
    }
    getTtitle(title:string){
        return axios.get(`${this.url}?title_like=${title}`)
    }
}
export default new BookServices()