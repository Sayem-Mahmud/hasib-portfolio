import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './AddBlog.css';
const AddBlog = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    //Blog
    const titleRef = useRef();
    const dateRef = useRef();
    const img1Ref = useRef();
    const article1Ref = useRef();
    const article1boldRef = useRef();
    const img2Ref = useRef();
    const article2Ref = useRef();
    const article2boldRef = useRef();
    const img3Ref = useRef();
    const article3Ref = useRef();
    const article3boldRef = useRef();
    const img4Ref = useRef();
    const article4Ref = useRef();
    const article4boldRef = useRef();
    const img5Ref = useRef();
    const article5Ref = useRef();
    const article5boldRef = useRef();
    const img6Ref = useRef();
    const article6Ref = useRef();
    const article6boldRef = useRef();
    const img7Ref = useRef();
    const article7Ref = useRef();
    const article7boldRef = useRef();
    const img8Ref = useRef();
    const article8Ref = useRef();
    const article8boldRef = useRef();

    const handleAddBlog = e => {
        const title = titleRef.current.value;
        const date = dateRef.current.value;
        const img1 = img1Ref.current.value;
        const article1 = article1Ref.current.value;
        const article1bold = article1boldRef.current.value;
        const img2 = img2Ref.current.value;
        const article2 = article2Ref.current.value;
        const article2bold = article2boldRef.current.value;
        const img3 = img3Ref.current.value;
        const article3 = article3Ref.current.value;
        const article3bold = article3boldRef.current.value;
        const img4 = img4Ref.current.value;
        const article4 = article4Ref.current.value;
        const article4bold = article4boldRef.current.value;
        const img5 = img5Ref.current.value;
        const article5 = article5Ref.current.value;
        const article5bold = article5boldRef.current.value;
        const img6 = img6Ref.current.value;
        const article6 = article6Ref.current.value;
        const article6bold = article6boldRef.current.value;
        const img7 = img7Ref.current.value;
        const article7 = article7Ref.current.value;
        const article7bold = article7boldRef.current.value;
        const img8 = img8Ref.current.value;
        const article8 = article8Ref.current.value;
        const article8bold = article8boldRef.current.value;


        const addedBlogs = {
            title, date,
            img1, article1, article1bold,
            img2, article2, article2bold,
            img3, article3, article3bold,
            img4, article4, article4bold,
            img5, article5, article5bold,
            img6, article6, article6bold,
            img7, article7, article7bold,
            img8, article8, article8bold
        };
        console.log('addedBlogs', addedBlogs);
        fetch('http://localhost:5000/blog', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedBlogs)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('successfully added the blog');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <div className=" bt-4 mt-4 fw-bolder" style={{ backgroundColor: '#BFA5A5' }}>
                <h2 className="pt-2 bt-4 mt-4">Add a Blog</h2>
                <form onSubmit={handleAddBlog} className="row g-3 p-4 pt-0 b-4 m-4">
                    <div class="col-md-6">
                        <label for="inputImg4" class="form-label">Title (Required)</label>
                        <input type="text" class="form" id="inputImg4" ref={titleRef} required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputImg4" class="form-label">Date (Required)</label>
                        <input type="text" class="form" id="inputImg4" ref={dateRef} required />
                    </div>
                    <div class="col-md-4">
                        <label for="inputName4" class="form-label">Image1 (Required)</label>
                        <input type="text" class="form" id="inputName4" ref={img1Ref} required />
                    </div>
                    <div class="col-md-4">
                        <label for="inputImg4" class="form-label">Article1 (Required)</label>
                        <input type="text" class="form" id="inputImg4" ref={article1Ref} required />
                    </div>
                    <div class="col-md-4">
                        <label for="inputImg4" class="form-label">Article1 Bold</label>
                        <input type="text" class="form" id="inputImg4" ref={article1boldRef} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputName4" class="form-label">Image2</label>
                        <input type="text" class="form" id="inputName4" ref={img2Ref} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputImg4" class="form-label">Article2 </label>
                        <input type="text" class="form" id="inputImg4" ref={article2Ref} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputImg4" class="form-label">Article2 Bold</label>
                        <input type="text" class="form" id="inputImg4" ref={article2boldRef} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputName4" class="form-label">Image3</label>
                        <input type="text" class="form" id="inputName4" ref={img3Ref} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputImg4" class="form-label">Article3 </label>
                        <input type="text" class="form" id="inputImg4" ref={article3Ref} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputImg4" class="form-label">Article3 Bold</label>
                        <input type="text" class="form" id="inputImg4" ref={article3boldRef} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputName4" class="form-label">Image4</label>
                        <input type="text" class="form" id="inputName4" ref={img4Ref} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputImg4" class="form-label">Article4 </label>
                        <input type="text" class="form" id="inputImg4" ref={article4Ref} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputImg4" class="form-label">Article4 Bold</label>
                        <input type="text" class="form" id="inputImg4" ref={article4boldRef} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputName4" class="form-label">Image5</label>
                        <input type="text" class="form" id="inputName4" ref={img5Ref} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputImg4" class="form-label">Article5 </label>
                        <input type="text" class="form" id="inputImg4" ref={article5Ref} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputImg4" class="form-label">Article5 Bold</label>
                        <input type="text" class="form" id="inputImg4" ref={article5boldRef} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputName4" class="form-label">Image6 </label>
                        <input type="text" class="form" id="inputName4" ref={img6Ref} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputImg4" class="form-label">Article6 </label>
                        <input type="text" class="form" id="inputImg4" ref={article6Ref} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputImg4" class="form-label">Article6 Bold</label>
                        <input type="text" class="form" id="inputImg4" ref={article6boldRef} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputName4" class="form-label">Image7 </label>
                        <input type="text" class="form" id="inputName4" ref={img7Ref} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputImg4" class="form-label">Article7 </label>
                        <input type="text" class="form" id="inputImg4" ref={article7Ref} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputImg4" class="form-label">Article7 Bold</label>
                        <input type="text" class="form" id="inputImg4" ref={article7boldRef} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputName4" class="form-label">Image8</label>
                        <input type="text" class="form" id="inputName4" ref={img8Ref} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputImg4" class="form-label">Article8 </label>
                        <input type="text" class="form" id="inputImg4" ref={article8Ref} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputImg4" class="form-label">Article8 Bold</label>
                        <input type="text" class="form" id="inputImg4" ref={article8boldRef} />
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Add</button>
                        <Link to='/hasibPanel'><button type="submit" class="btn btn-primary ms-2">Back</button></Link>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddBlog;