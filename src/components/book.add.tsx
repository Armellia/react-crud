import React from "react";
import { useNavigate } from "react-router-dom";
import { book } from "../models/book.model";
import bookServices from "../services/book.services";

function BookAdd(){
    const navigate=useNavigate()
    const onSave=(event:any):any=>{
        event.preventDefault()
        const form=new FormData(event.target)
        const book:book={title:form.get('title')?.toString(),author:form.get('author')?.toString()}
        bookServices.create(book).then((value:any)=>{
            alert('Input Data Berhasil')
            navigate('/')
        })
        
    }
    return(
        <div className="w-50 m-auto">
                <form onSubmit={onSave}>
                    <div className="form-group">
                        <label aria-label="title">Title</label>
                        <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="" name="title" />
                    </div>
                    <div className="form-group">
                        <label aria-label="author">Author</label>
                        <input type="text" className="form-control" id="author" placeholder="" name="author" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    )
}

    
    

export default BookAdd