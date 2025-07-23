import{Form} from "react-router-dom";
import"./HACM.css";
export const contactData=async({request})=>{
    try{
       const res= await request.formData();
      const data= Object.fromEntries(res);
         console.log(data);
    }catch(error){
        console.log(error);
    }
}
export const Contact=()=>{
    return(
     <>
     <section className="section-contact">
        <div className="container">
            <h2 className="common-heading">Contact Us</h2>
            <p className="subheading">
                Get in touch with Us. We are always here to help you.
            </p>
        </div>
        <div className="grid">
                   <div className="image-container">
            <img
              src="https://th.bing.com/th/id/OIP.ifiUJpkPuXMppzsLkqhj0QHaFj?w=261&h=196&c=7&r=0&o=5&dpr=2&pid=1.7"
              alt="image"
              className="contact-image"
            />
          </div>
            <div className="content">
                <Form method="POST" action="/contact">
                    <div className="grid2">
                        <div>
                            <label htmlFor="username">Full Name</label>
                            <input type="text"  name="username" id="username" required autoComplete="off" placeholder="enter full name"/>
                        </div>
                         <div>
                            <label htmlFor="email">email address</label>
                            <input type="email"  name="email" id="email" required autoComplete="off" placeholder="abc@123.com"/>
                        </div>
                    </div>
                    <div className="grid3">
                        <label htmlFor="message">message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="we are always here to help you"></textarea>
                    </div>
                    <button className="btn" >Submit</button>
                </Form>
            </div>
        </div>
     </section>
     </>
    )
}