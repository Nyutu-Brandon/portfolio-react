import { useState } from "react";
function Contact () {
    const [form, setForm] = useState({ name: "", message: ""});
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks ${form.name}, we received your message!`);
        setForm({ name: "", message: ""});
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Contact Me</h2>
            <input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                required

            />
            <textarea
                placeholder="Your message"
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                required
            ></textarea>
            <button type="submit">Send</button>

        </form>

    );
}

export default Contact;