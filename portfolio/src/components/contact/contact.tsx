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
        await emailjs.send('service_nr375yv', 'template_dldwu8r', formData, "uAZqooKamZXIcA_qD")
        .then(async function() {
            await toast("success");
        }).catch(async function() {
            await toast("Could not send email, please try again!")
        });
    }


    return (
        <div className="w-full h-full flex items-center justify-center md:py-4 xs:px-4 rounded-lg">
            <div className="sm:w-2/3 xs:w-full rounded-xl shadow-2xl md:p-10 xs:px-4  border-[1px] border-my-blue/20">
                <h1 className="text-xl font-bold text-left p-1 text-my-blue">Name:</h1>
                <div className='w-full pb-2 flex justify-center'>
                    <input 
                        name="name" 
                        type="text" 
                        placeholder="Name" 
                        className="xs:w-full sm:w-10/12 h-12 rounded-xl bg-gray-100 px-2" 
                        required onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </div>
                <h1 className="text-xl font-bold text-left p-1 text-my-blue">Message:</h1>
                <div className='w-full pb-2 flex justify-center'>
                    <textarea 
                        name="message" 
                        placeholder="Message" 
                        className="xs:w-full sm:w-10/12 md:min-h-40 xs:h-20 rounded-xl bg-gray-100 p-2" 
                        required onChange={(e) => setFormData({...formData, message: e.target.value})}>
                    </textarea>
                </div>
                <h1 className="text-xl font-bold text-left p-1 text-my-blue">How to Reach You:</h1>
                <div className='w-full pb-2 flex justify-center'> 
                    <input 
                        name="contact" 
                        type="text" 
                        placeholder="Please provide the best way to contact you and any preferred days and times." 
                        className="xs:hidden lg:block w-10/12 h-12 rounded-xl bg-gray-100 px-2 text-sm" 
                        required onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    />
                    <input 
                        name="contact" 
                        type="text" 
                        placeholder="Please leave contact information here." 
                        className="xs:w-full sm:w-10/12 xs:block lg:hidden h-12 rounded-xl bg-gray-100 px-2" 
                        required onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    />
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