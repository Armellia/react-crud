function BookSearch(props:any){
    const onSearch=(e:any)=>{
        props.searched(e.target.value)
    }
    return(
    <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              name="search"
              type="text"
              className="form-control"
              placeholder="Search by title"
              onChange={onSearch}
            />
          </div>
        </div>
        )
}
export default BookSearch