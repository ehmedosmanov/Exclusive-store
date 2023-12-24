import React from 'react'
import Button from '../../CommonComponents/Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeMessageSchema, messageSchema } from '../../../validations/message';
type Props = {}


const ContactForm = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<TypeMessageSchema>({
        resolver: zodResolver(messageSchema)
    });
    const onSubmit: SubmitHandler<TypeMessageSchema> = (data) => {
        console.log(data);
        reset()
    }
    return (
        <div className='contact-form my-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="message-info pb-8 flex flex-col md:flex-row gap-3">
                    <div className="input-box w-full">
                        <input {...register("name")} type="text" placeholder='Your Name *' className='w-full bg-secondary outline-none py-3 pl-4   ' />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="input-box w-full ">
                        <input {...register("email")} type="email" placeholder='Your Email *' className='w-full bg-secondary outline-none py-3 pl-4' />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="input-box w-full">
                        <input {...register("phone")} type="number" placeholder='Your Phone *' className='w-full bg-secondary outline-none py-3 pl-4' />
                        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                    </div>
                </div>
                <div className="message-area flex justify-center items-center w-full">
                    <textarea {...register("message")} className='w-full bg-secondary outline-none p-4' placeholder='Your Massage' rows={8} cols={40} />
                </div>
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}

                <div className="form-btn pt-8 flex justify-end">
                    <Button bgPrimary>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm