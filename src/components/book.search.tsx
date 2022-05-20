function BookSearch(){
    return(
    <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        )
}
export default BookSearch