export default function Price(props) {
  return <div class="col-lg-4">


<div className="bg-white p-4">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">{props.plan}</h1>
                <h2 className="h1 font-weight-bold">{props.amount}<span className="text-small font-weight-normal ml-2"></span></h2>
                <div className="custom-separator my-4 mx-auto bg-primary"></div>
                <ul className="list-unstyled my-5 text-small text-left">
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> {props.user}</li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> {props.storage}</li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> {props.projects}</li>
                    <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> {props.access}</li>
                    <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> {props.premium}</li>
                    <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> {props.support}</li>
                    <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> {props.domain}</li>
                    <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> {props.domain}</li>

                </ul>
                <a href="#" className="btn btn-primary btn-block p-2 shadow rounded-pill">Button</a>
              </div>

              </div>              
}
