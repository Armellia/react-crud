import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { book } from "../models/book.model";
import bookServices from "../services/book.services";

function BookEdit(){
    const param=useParams()
    const id:any=param.id
    let [title,setTitle]:any=useState('')
    let [author,setAuthor]:any=useState('')
    let [isLoading,setLoading]=useState(true)
    
    const load= useCallback(()=>{
        bookServices.getId(id).then((value:any)=>{
            setLoading(false)
            console.log(value.data)
            setTitle(value.data.title)
            setAuthor(value.data.author)            
        })
    },[id])
    useEffect(()=>{
        load()
    },[load])
    const navigate=useNavigate()
    const onEdit=(event:any)=>{
        event.preventDefault()
        const book:book={title:title,author:author}
        bookServices.update(id,book).then((value:any)=>{
            alert('Edit Data Berhasil')
            navigate('/')
        })   
    }
    const titleHandler=(event:any)=>{
        setTitle(event.target.value)
    }
    const authorHandler=(event:any)=>{
        setAuthor(event.target.value)
    }
    if(isLoading){
        return <div>Loading</div>
    }
    else
    return(
        <div className="w-50 m-auto">
                <form onSubmit={onEdit}>
                    <div className="form-group">
                        <label aria-label="title">Title</label>
                        <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="" name="title" value={title} onChange={titleHandler}/>
                    </div>
                    <div className="form-group">
                        <label aria-label="author">Author</label>
                        <input type="text" className="form-control" id="author" placeholder="" name="author" value={author} onChange={authorHandler}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={onEdit}>Submit</button>
                </form>
            </div>
    )
}

export default BookEdit