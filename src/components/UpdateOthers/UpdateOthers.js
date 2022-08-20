import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UseDataOthers from '../../hooks/useDataOthers';

const UpdateOthers = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { otherId } = useParams();
    const [others, setOthers] = UseDataOthers()
    console.log(others);

    const other = others.filter((other) => other._id == otherId)
    console.log(other);

    const nameRef = useRef();
    const headerImageRef = useRef();
    const aboutSiteRef = useRef();
    const aboutMeImageRef = useRef();
    const aboutMe1stParaRef = useRef();
    const aboutMe2ndParaRef = useRef();
    const downloadCvRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const faxRef = useRef();
    const facebookLinkRef = useRef();
    const twitterLinkRef = useRef();
    const instagramLinkRef = useRef();
    const linkedinLinkRef = useRef();
   

   
    const handleUpdateOthers = e => {
        const name = nameRef.current.value;
        const headerImage = headerImageRef.current.value;
        const aboutSite = aboutSiteRef.current.value;
        const aboutMeImage = aboutMeImageRef.current.value;
        const aboutMe1stPara = aboutMe1stParaRef.current.value;
        const aboutMe2ndPara = aboutMe2ndParaRef.current.value;
        const downloadCv = downloadCvRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const fax = faxRef.current.value;
        const facebookLink = facebookLinkRef.current.value;
        const twitterLink = twitterLinkRef.current.value;
        const instagramLink = instagramLinkRef.current.value;
        const linkedinLink = linkedinLinkRef.current.value;
       

        const updateOthers = {
            name,headerImage,aboutSite,aboutMeImage,aboutMe1stPara,aboutMe2ndPara,downloadCv,email,phone,fax,facebookLink,twitterLink,instagramLink,linkedinLink
        };
        console.log(updateOthers);
        fetch(`http://localhost:5000/other/${otherId}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateOthers)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('successfully updated others data');
                    // e.target.reset();
                    // const AfterUpdatePortfolio = portfolios.filter((portfolio) => portfolio._id == portfolioId)
                    // setPortfolios(AfterUpdatePortfolio);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <div className=" bt-4 mt-4 fw-bolder bg-secondary">
                <h2 className="pt-2 bt-4 mt-4">Update others data</h2>
                <form onSubmit={handleUpdateOthers} className="row g-3 p-4 pt-0 b-4 m-4">
                    <div class="col-md-6">
                        <label for="inputImg4" class="form-label">Name (Required)</label>
                        <input type="text" class="form" id="inputImg4" defaultValue={other[0]?.name} ref={nameRef} required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputImg4" class="form-label">Header Image URL (Required)</label>
                        <input type="text" class="form" id="inputImg4" defaultValue={other[0]?.headerImage} ref={headerImageRef} required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputName4" class="form-label">About Site (Required)</label>
                        <input type="text" class="form" id="inputName4" defaultValue={other[0]?.aboutSite} ref={aboutSiteRef} required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputName4" class="form-label">AboutMe image (Required)</label>
                        <input type="text" class="form" id="inputName4" defaultValue={other[0]?.aboutMeImage} ref={aboutMeImageRef} required/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputImg4" class="form-label">AboutMe 1st part (Required)</label>
                        <input type="text" class="form" id="inputImg4" defaultValue={other[0]?.aboutMe1stPara} ref={aboutMe1stParaRef} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputImg4" class="form-label">AboutMe 2nd part</label>
                        <input type="text" class="form" id="inputImg4" defaultValue={other[0]?.aboutMe2ndPara} ref={aboutMe2ndParaRef} />
                    </div>

                    <div class="col-md-6">
                        <label for="inputImg4" class="form-label">Download CV Link</label>
                        <input type="text" class="form" id="inputImg4" defaultValue={other[0]?.downloadCv} ref={downloadCvRef} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputImg4" class="form-label">Email</label>
                        <input type="text" class="form" id="inputImg4" defaultValue={other[0]?.email} ref={emailRef} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputName4" class="form-label">Phone</label>
                        <input type="text" class="form" id="inputName4" defaultValue={other[0]?.phone} ref={phoneRef} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputImg4" class="form-label">Fax</label>
                        <input type="text" class="form" id="inputImg4" defaultValue={other[0]?.fax} ref={faxRef} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputImg4" class="form-label">Facebook URL</label>
                        <input type="text" class="form" id="inputImg4" defaultValue={other[0]?.facebookLink} ref={facebookLinkRef} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputName4" class="form-label">Twitter URL</label>
                        <input type="text" class="form" id="inputName4" defaultValue={other[0]?.twitterLink} ref={twitterLinkRef} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputImg4" class="form-label">Instagram URL </label>
                        <input type="text" class="form" id="inputImg4" defaultValue={other[0]?.instagramLink} ref={instagramLinkRef} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputImg4" class="form-label">Linkedin URL</label>
                        <input type="text" class="form" id="inputImg4" defaultValue={other[0]?.linkedinLink} ref={linkedinLinkRef} />
                    </div>
                    
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Update</button>
                        <Link to="/hasibPanel"><button type="submit" class="btn ms-2 btn-primary">Back</button></Link>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateOthers;