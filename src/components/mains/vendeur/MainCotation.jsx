import "../../styles/mainStyle.css";

const MainCotation = () => {
  const imgUrl =
    "http://localhost:2000/uploads/kamoa_copper.png_1687777700962.png";

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Cotation</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Cotation</li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Page Title --> */}
      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Datatables</h5>
                <p>
                  Add lightweight datatables to your project with using the{" "}
                  <a
                    href="https://github.com/fiduswriter/Simple-DataTables"
                    target="_blank"
                  >
                    Simple DataTables
                  </a>{" "}
                  library. Just add <code>.datatable</code> class name to any
                  table you wish to conver to a datatable
                </p>

                {/* Table with stripped rows */}
                <table className="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Entreprise</th>
                      <th scope="col">Position</th>
                      <th scope="col">Age</th>
                      <th scope="col">Start Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        <img
                          src={imgUrl}
                          alt="Profile"
                          className="rounded-circle taille-img"
                        />
                        Brandon Jacob
                      </td>
                      <td>Designer</td>
                      <td>28</td>
                      <td>2016-05-25</td>
                    </tr>
                  </tbody>
                </table>
                {/* End Table with stripped rows */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainCotation;
