
import BlockList from './BlockList'
import useFetch from './useFetch';

const Home = () => { 

   const {data:blogs, isPending, error} = useFetch('https://json-server-snowy-pi.vercel.app/blogs');
    // const handleDelete = (id) => {
    //     const newBlog = blogs.filter((blog) => blog.id !== id);
    //     setData(newBlog);
    // }
   
  return (
    <div className='home'>
        {error && <p>{error}</p>}
        {isPending && <p>Loading.....</p>}
        {blogs && <BlockList blogs={blogs} title="All blogs"/>}
        {/* <BlockList blogs={blogs.filter((blog) => blog.author === "mario")} handleDelete={handleDelete} title="Mario's blogs"/> */}
    </div>
  )
}

export default Home
