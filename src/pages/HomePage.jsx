import MenuList from "../components/MenuList"

function HomePage() {
  return (
    <section className="home-container container">
      <div className="home-content">
        <h1>
          <span>Welcome to the</span>
          <span>Frontend Quiz!</span>
        </h1>
        <p>Pick a subject to get started.</p>
      </div>
      <div className="home-nav-list">
        <MenuList/>
      </div>
    </section>
  )
}

export default HomePage