import React from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    //http://localhost:8000/blogs/
    const {data:blog, error, isPending} = useFetch('https://json-server-snowy-pi.vercel.app/blogs/'+id);
    const history = useHistory();
    const handleClick = () => {
        fetch('https://json-server-snowy-pi.vercel.app/blogs/'+blog.id,{
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        })
    }
  return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
            <article>
                    <h2>{blog.title}</h2>
                    <p>Written by { blog.author }</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
            </article>
        )
      }
    </div>
  )
}

export default BlogDetails
