import Notice from '../components/Notice'
import './dashboard.css'
import StockChart from '../components/StockChart'

const Dashboard = () => {
  return (
    <>
      <section className="dashboard">
        <div className="row">
          <Notice />
          <div className="col-75">
            <div className="card">
              <h2>TITLE HEADING</h2>
              <h5>Title description, Dec 7, 2017</h5>
              <div className="fakeimg" style={{ height: '200px' }}>
                Image
              </div>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
            </div>
            <div className="card">
              <h2>TITLE HEADING</h2>
              <h5>Title description, Sep 2, 2017</h5>
              <div className="fakeimg" style={{ height: '200px' }}>
                Image
              </div>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
            </div>
          </div>
          <div className="col-25">
            <div className="card">
              <h2>About Me</h2>
              <div className="fakeimg" style={{ height: '100px' }}>
                Image
              </div>
              <p>
                Some text about me in culpa qui officia deserunt mollit anim..
              </p>
            </div>
            <div className="card">
              <h3>Popular Post</h3>
              <div className="fakeimg">Image</div>
              <br />
              <div className="fakeimg">Image</div>
              <br />
              <div className="fakeimg">Image</div>
            </div>
            <div className="card">
              <h3>Follow Me</h3>
              <p>Some text..</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
