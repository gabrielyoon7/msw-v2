import './App.css'

function App() {

  const handlePosts = async () => {
    const response = await fetch('/posts')
    const posts = await response.json()
    console.log(posts)
  }

  return (
    <>
      <button onClick={handlePosts}>Get Posts</button>
    </>
  )
}

export default App
