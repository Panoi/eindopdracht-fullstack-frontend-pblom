import UserForm from "../components/userform/UserForm.jsx";
import {useForm} from "react-hook-form";


function Register() {

    const {register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    });

    return (
        <>
            <h1>register</h1>

            <form>

                <UserForm
                    inputName="first-name"
                    inputLabel="Voornaam"
                    inputType="text"
                    validationRules={
                        {
                            required: {
                                value: true,
                                message: "Voornaam is verplicht.",
                            }, minLength: {
                                value: 3,
                                message: "Voornaam moet minstens 3 karakters lang zijn."
                            }, maxLength: {
                                value: 25,
                                message: "Achternaam mag maximaal 25 karakters lang zijn."
                            },
                        }}
                    register={register}
                    errors={errors}
                />

                <UserForm
                    inputName="last-name"
                    inputLabel="Achternaam"
                    inputType="text"
                    validationRules={
                        {
                            required: {
                                value: true,
                                message: "Achternaam is verplicht.",
                            }, minLength: {
                                value: 3,
                                message: "Achternaam moet minstens 3 karakters lang zijn."
                            }, maxLength: {
                                value: 25,
                                message: "Achternaam mag maximaal 25 karakters lang zijn."
                            },
                        }}
                    register={register}
                    errors={errors}
                />

                <UserForm
                    inputName="email"
                    inputLabel="Email"
                    inputType="email"
                    validationRules={
                        {
                            required: {
                                value: true,
                                message: "Email is verplicht.",
                            }, minLength: {
                                value: 5,
                                message: "Email moet minstens 5 karakters lang zijn."
                            }, maxLength: {
                                value: 50,
                                message: "Email mag maximaal 50 karakters lang zijn."
                            },
                        }}
                    register={register}
                    errors={errors}
                />

                <UserForm
                    inputName="password"
                    inputLabel="Wachtwoord"
                    inputType="password"
                    validationRules={
                        {
                            required: {
                                value: true,
                                message: "Wachtwoord is verplicht.",
                            }, minLength: {
                                value: 5,
                                message: "Wachtwoord moet minstens 5 karakters lang zijn."
                            }, maxLength: {
                                value: 50,
                                message: "Wachtwoord mag maximaal 50 karakters lang zijn."
                            },
                        }}
                    register={register}
                    errors={errors}
                />

            </form>

        </>
    )
}

export default Register