import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useDataP from '../../hooks/UseDataP';
import './UpdatePortfolio.css'
const UpdatePortfolio = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { portfolioId } = useParams();
    const [portfolios, setPortfolios] = useDataP()
    console.log(portfolios);

    const portfolio = portfolios.filter((portfolio) => portfolio._id == portfolioId)
    console.log(portfolio);

    const titleRef = useRef();
    const roleRef = useRef();
    const img1Ref = useRef();
    const description1Ref = useRef();
    const description1boldRef = useRef();
    const img2Ref = useRef();
    const description2Ref = useRef();
    const description2boldRef = useRef();
    const img3Ref = useRef();
    const description3Ref = useRef();
    const description3boldRef = useRef();
    const img4Ref = useRef();
    const description4Ref = useRef();
    const description4boldRef = useRef();
    const img5Ref = useRef();
    const description5Ref = useRef();
    const description5boldRef = useRef();
    const img6Ref = useRef();
    const description6Ref = useRef();
    const description6boldRef = useRef();
    const img7Ref = useRef();
    const description7Ref = useRef();
    const description7boldRef = useRef();
    const img8Ref = useRef();
    const description8Ref = useRef();
    const description8boldRef = useRef();

   
    const handleUpdatePortfolio = e => {
        const title = titleRef.current.value;
        const role = roleRef.current.value;
        const img1 = img1Ref.current.value;
        const description1 = description1Ref.current.value;
        const description1bold = description1boldRef.current.value;
        const img2 = img2Ref.current.value;
        const description2 = description2Ref.current.value;
        const description2bold = description2boldRef.current.value;
        const img3 = img3Ref.current.value;
        const description3 = description3Ref.current.value;
        const description3bold = description3boldRef.current.value;
        const img4 = img4Ref.current.value;
        const description4 = description4Ref.current.value;
        const description4bold = description4boldRef.current.value;
        const img5 = img5Ref.current.value;
        const description5 = description5Ref.current.value;
        const description5bold = description5boldRef.current.value;
        const img6 = img6Ref.current.value;
        const description6 = description6Ref.current.value;
        const description6bold = description6boldRef.current.value;
        const img7 = img7Ref.current.value;
        const description7 = description7Ref.current.value;
        const description7bold = description7boldRef.current.value;
        const img8 = img8Ref.current.value;
        const description8 = description8Ref.current.value;
        const description8bold = description8boldRef.current.value;
       

        const updateBlogs = {
            title, role,
            img1, description1, description1bold,
            img2, description2, description2bold,
            img3, description3, description3bold,
            img4, description4, description4bold,
            img5, description5, description5bold,
            img6, description6, description6bold,
            img7, description7, description7bold,
            img8, description8, description8bold
        };
        console.log(updateBlogs);
        fetch(`https://dry-peak-89227.herokuapp.com/portfolio/${portfolioId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBlogs)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('successfully updated the portfolio');
                    // e.target.reset();
                    const AfterUpdatePortfolio = portfolios.filter((portfolio) => portfolio._id == portfolioId)
                    setPortfolios(AfterUpdatePortfolio);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
        <div className=" bt-4 mt-4 fw-bolder bg-secondary">
            <h2 className="pt-2 bt-4 mt-4">Update a portfolio</h2>
            <form onSubmit={handleUpdatePortfolio} className="row g-3 p-4 pt-0 b-4 m-4">
                <div class="col-md-6">
                    <label for="inputImg4" class="form-label">Title (Required)</label>
                    <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.title} ref={titleRef} required />
                </div>
                <div class="col-md-6">
                    <label for="inputImg4" class="form-label">Role (Required)</label>
                    <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.role} ref={roleRef} required />
                </div>
                <div class="col-md-4">
                    <label for="inputName4" class="form-label">Image1 (Required)</label>
                    <input type="text" class="form" id="inputName4" defaultValue={portfolio[0]?.img1} ref={img1Ref} required />
                </div>
                <div class="col-md-4">
                    <label for="inputImg4" class="form-label">Description1 (Required)</label>
                    <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.description1} ref={description1Ref} required />
                </div>
                <div class="col-md-4">
                    <label for="inputImg4" class="form-label">Description1 Bold</label>
                    <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.description1bold} ref={description1boldRef} />
                </div>
                <div class="col-md-4">
                    <label for="inputName4" class="form-label">Image2</label>
                    <input type="text" class="form" id="inputName4" defaultValue={portfolio[0]?.img2} ref={img2Ref}/>
                </div>
                <div class="col-md-4">
                    <label for="inputImg4" class="form-label">Description2</label>
                        <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.description2} ref={description2Ref} />
                </div>
                <div class="col-md-4">
                    <label for="inputImg4" class="form-label">Description2 Bold</label>
                    <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.description2bold} ref={description2boldRef}/>
                </div>
                <div class="col-md-4">
                    <label for="inputName4" class="form-label">Image3 </label>
                    <input type="text" class="form" id="inputName4" defaultValue={portfolio[0]?.img3} ref={img3Ref} />
                </div>
                <div class="col-md-4">
                    <label for="inputImg4" class="form-label">Description3 </label>
                    <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.description3} ref={description3Ref}/>
                </div>
                <div class="col-md-4">
                    <label for="inputImg4" class="form-label">Description3 Bold</label>
                    <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.description3bold} ref={description3boldRef}/>
                </div>
                <div class="col-md-4">
                    <label for="inputName4" class="form-label">Image4</label>
                    <input type="text" class="form" id="inputName4" defaultValue={portfolio[0]?.img4} ref={img4Ref}/>
                </div>
                <div class="col-md-4">
                    <label for="inputImg4" class="form-label">Description4 </label>
                    <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.description4} ref={description4Ref} />
                </div>
                <div class="col-md-4">
                    <label for="inputImg4" class="form-label">Description4 Bold</label>
                    <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.description4bold} ref={description4boldRef}/>
                </div>
                <div class="col-md-4">
                    <label for="inputName4" class="form-label">Image5</label>
                    <input type="text" class="form" id="inputName4" defaultValue={portfolio[0]?.img5} ref={img5Ref}/>
                </div>
                <div class="col-md-4">
                    <label for="inputImg4" class="form-label">Description5</label>
                    <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.description5} ref={description5Ref}/>
                </div>
                <div class="col-md-4">
                    <label for="inputImg4" class="form-label">Description5 Bold</label>
                    <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.description5bold} ref={description5boldRef}/>
                </div>
                <div class="col-md-4">
                    <label for="inputName4" class="form-label">Image6</label>
                    <input type="text" class="form" id="inputName4" defaultValue={portfolio[0]?.img6} ref={img6Ref}/>
                </div>
                <div class="col-md-4">
                    <label for="inputImg4" class="form-label">Description6</label>
                    <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.description6} ref={description6Ref}/>
                </div>
                <div class="col-md-4">
                    <label for="inputImg4" class="form-label">Description6 Bold</label>
                    <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.description6bold} ref={description6boldRef}/>
                </div>
                <div class="col-md-4">
                    <label for="inputName4" class="form-label">Image7</label>
                    <input type="text" class="form" id="inputName4" defaultValue={portfolio[0]?.img7} ref={img7Ref}/>
                </div>
                <div class="col-md-4">
                    <label for="inputImg4" class="form-label">Description7</label>
                    <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.description7} ref={description7Ref}/>
                </div>
                <div class="col-md-4">
                    <label for="inputImg4" class="form-label">Description7 Bold</label>
                    <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.description7bold} ref={description7boldRef}/>
                </div>
                <div class="col-md-4">
                    <label for="inputName4" class="form-label">Image8 </label>
                    <input type="text" class="form" id="inputName4" defaultValue={portfolio[0]?.img8} ref={img8Ref} />
                </div>
                <div class="col-md-4">
                    <label for="inputImg4" class="form-label">Description8</label>
                    <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.description8} ref={description8Ref}/>
                </div>
                <div class="col-md-4">
                    <label for="inputImg4" class="form-label">Description8 Bold</label>
                    <input type="text" class="form" id="inputImg4" defaultValue={portfolio[0]?.description8bold} ref={description8boldRef}/>
                </div>
                <div class="col-12">
                        <button type="submit" class="btn btn-primary">Update</button>
                        <Link to="/updateB-p"><button type="submit" class="btn ms-2 btn-primary">Back</button></Link>
                </div>
            </form>
        </div>

    </div>
    );
};

export default UpdatePortfolio;