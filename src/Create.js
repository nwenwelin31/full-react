import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);
        fetch('https://react-blog-tawny-nu.vercel.app/blogs',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        });
        console.log(blog);
    }
  return (
    <div className='create'>
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Block Title:</label>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <label>Blog Body:</label>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
            <label>Blog Author:</label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                <option value='mario'>Mario</option>
                <option value='yoshi'>Yoshi</option>
            </select>
            {!isPending && <button type='submit'>Add Blog</button>}
            {isPending && <button disabled>Adding Blog...</button>}
        </form>
    </div>
  )
}

export default Create
