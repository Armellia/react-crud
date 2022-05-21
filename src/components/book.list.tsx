import React from "react";
import { Link } from "react-router-dom";

import bookServices from "../services/book.services";
import BookDelete from "./book.delete";
import BookSearch from "./book.search";

class BookList extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state={
            books:[],
            isLoading:true,
            error:'',
        }
        this.onClick=this.onClick.bind(this)
    }
    componentDidMount(){
        bookServices.getAll().then((value)=>{
            this.setState({
                books:value.data,
                isLoading:false
            })
        }).catch((err)=>{
            this.setState({
                isLoading:false,
                error:err
            })
        })
    }
    onClick=(id:any)=>{
        console.log(id)
        const filter=this.state.books.filter((value:any)=>(
            value.id!==id
        ))
        this.setState({
            books:filter
        })
    }
    onSearch=(title:any)=>{
        console.log(title)
        let search:any=[];
        bookServices.getTtitle(title).then((value:any)=>{
            search=value.data
            this.setState({books:search})
        })
    }
    render(): React.ReactNode {
        const {books,isLoading,error}=this.state
        if(error){
            return <div className="m-auto w-100">Error</div>
        }
        else if(isLoading){
            return <div className="m-auto w-100">Loading..</div>
        }
        else{
        return(
            <div className="m-auto w-75">
        <div className="list row">
        <BookSearch searched={this.onSearch}/>
        <div className="col">
          
          <table className="table table-hover">
              <thead>
                  <tr>
                      <th>index</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  
                      {books.map((value:any)=>(
                          <tr key={value.id}>
                        <td>{value.id}</td>
                          <td>{value.title}</td>
                          <td>{value.author}</td>
                          <td>
                            <Link to={`/edit/${value.id}`}>
                              <button className="btn btn-warning" >Edit</button>
                            </Link>
                              <BookDelete id={value.id} onDelete={()=>this.onClick(value.id)}/></td>
                          </tr>
                      ))}
              </tbody>
          </table>
          
          
        </div>
      </div></div>
        )
    }
}
}

export default BookList