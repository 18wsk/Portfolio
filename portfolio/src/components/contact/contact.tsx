import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [formData, setFormData] = useState<{name: string, message: string, contact: string}>({
        name: "",
        message: "",
        contact: "",
    })

    const sendEmail = async () => {
        if (formData.name !== "" && formData.message !== "" && formData.contact !== "") {
            await emailjs.send('service_nr375yv', 'template_dldwu8r', formData, "uAZqooKamZXIcA_qD")
            .then(function() {
                toast("success");
            }, function() {
                toast("Could not send email, please try again!")
            });
        } else {
            console.log(formData)
            toast("Please fill all the fields!")
        }
    }


    return (
        <div className="w-full h-full flex items-start justify-center md:py-10">
            <div className="md:w-1/2 xs:w-full rounded-xl shadow-2xl md:p-10 xs:px-4">
                <h1 className="text-xl font-bold text-left p-1">Name:</h1>
                <div className='w-full pb-2 flex justify-center'>
                    <input name="name" type="text" placeholder="Name" className="xs:w-full md:w-3/4 h-12 rounded-xl bg-gray-100 px-2" required onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                </div>
                <h1 className="text-xl font-bold text-left p-1">Message:</h1>
                <div className='w-full pb-2 flex justify-center'>
                    <textarea name="message" placeholder="Message" className="xs:w-full md:w-3/4 md:min-h-40 xs:h-20 rounded-xl bg-gray-100 px-2" required onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                <h1 className="text-xl font-bold text-left p-1">How to Reach You:</h1>
                <div className='w-full pb-2 flex justify-center'> 
                    <input name="contact" type="text" placeholder="Leave preferred contact please" className="xs:w-full md:w-3/4 h-12 rounded-xl bg-gray-100 px-2" required onChange={(e) => setFormData({...formData, contact: e.target.value})}/>
                </div>
                <div className="w-full flex justify-center py-4">
                    <button className="p-2 rounded-xl bg-my-blue text-white hover:bg-blue-500 w-1/3" onClick={sendEmail}>Send</button>
                </div>
                
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default Contact