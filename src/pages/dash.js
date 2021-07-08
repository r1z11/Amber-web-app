// Dashboard (User Profile)
import { removeUserSession } from '../helpers/auth';

function Dash(props) {
    const user = props.location.state.user;
    // console.log('user', user);

    return (
        <div className="bg-light w-100 h-100 dash-body">

            <main className="container">
                <div className="container emp-profile">
                    <form method="post">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img className="rounded-circle" src={user.picture.large} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="profile-head">
                                    <h5>
                                        {user.name.title}&nbsp;{user.name.first}&nbsp;{user.name.last}
                                    </h5>
                                    <h6>
                                        {user.login.uuid}
                                    </h6>
                                    <p className="proile-rating">NATIONALITY : <span>&nbsp;{user.nat}</span></p>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Profile</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <input type="button" className="profile-edit-btn" name="btnAddMore" value="Logout" onClick={() => logout(props)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-work">
                                    <p>LOCATION</p>
                                    <p><b>Street:</b>&nbsp;{user.location.street.number}&nbsp;{user.location.street.name}</p>
                                    <p><b>City:</b>&nbsp;{user.location.city}</p>
                                    <p><b>State:</b>&nbsp;{user.location.state}</p>
                                    <p><b>Country:</b>&nbsp;{user.location.country}</p>
                                    <p><b>Post code:</b>&nbsp;{user.location.postcode}</p><br />
                                    <p>TIMEZONE</p>
                                    <p><b>Offset:</b>&nbsp;{user.location.timezone.offset}</p>
                                    <p><b>Description:</b>&nbsp;{user.location.timezone.description}</p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="tab-content profile-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Username</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.login.username}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.name.first}&nbsp;{user.name.last}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Gender</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.gender}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone number</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.phone}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Mobile phone number</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.cell}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Date of birth</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{new Date(user.dob.date).toString()}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Age</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.dob.age}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Registration date</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{new Date(user.registered.date).toString()}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Number of years since</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.registered.age}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>


            {/* <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

            <script src="offcanvas.js"></script> */}
        </div>
    );
}

const logout = (props) => {
    removeUserSession();
    props.history.push('/');
}

export default Dash;
