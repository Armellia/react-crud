import bookServices from "../services/book.services"

function BookDelete(props:any){
    const onDelete=():any=>{
        props.onDelete()
        bookServices.delete(props.id)
    }
    return(
        <button className="btn btn-danger" onClick={onDelete}>Delete</button>
    )
}
export default BookDelete