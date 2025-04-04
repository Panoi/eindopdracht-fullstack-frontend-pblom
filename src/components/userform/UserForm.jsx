import "./UserForm.css"

function UserForm({inputType, inputName, inputLabel, validationRules, register, errors}) {

    return (
        <>
            <label htmlFor={inputName}>
                {inputLabel}
            </label>
                <input
                    placeholder={inputName}
                    type={inputType}
                    id={inputName}
                    {...register(inputName, validationRules)}
                />
            {errors[inputName] && <p>{errors[inputName].message}</p>}
        </>
    );
}

export default UserForm