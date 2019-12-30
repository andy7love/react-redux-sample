import { useState } from "react";

const useFormData = <FormState>(initialFormData: FormState):
    [FormState, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] => {
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const resetForm = () => {
        setFormData(initialFormData);
    }

    return [formData, handleChange, resetForm];
}

export default useFormData;
