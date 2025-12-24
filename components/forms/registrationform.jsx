"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingScreen from "../ui/loadingscreen";
import AllAlerts from "../toasts/allalerts";

const styles = {
    formContainer:
        "relative w-10/12 text-shadow-sm text-shadow-stone-500 flex sm:flex-row flex-col justify-start sm:items-start items-end gap-2 p-2",
    shortLabel:
        "relative sm:w-1/4 w-3/4 px-5 py-0.5 shadow rounded-2xl shadow-stone-500 sm:text-end text-start",
    input:
        "relative outline-none shadow-inner shadow-stone-500 rounded-2xl px-2 w-full text-shadow-2xs text-shadow-stone-500",
    inputWrapper:
        "relative sm:w-3/4 w-full px-5 py-1 shadow rounded-2xl shadow-stone-500 flex gap-4",
};

const initialForm = {
    fullName: "",
    userEmail: "",
    userMobile: "",
    password: "",
};

const RegistrationForm = () => {
    const [formData, setFormData] = useState(initialForm);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAlertMessage("");

        const { fullName, userEmail, userMobile, password } =
            formData;

        if (!fullName || !userEmail || !userMobile || !password) {
            setAlertMessage("⚠️ Please enter all required details");
            return;
        }

        if (userType === "Artist") {
            if (formData.artField.length === 0) {
                setAlertMessage("⚠️ Please select at least one Art Field");
                return;
            }
            if (!formData.styleTags) {
                setAlertMessage("⚠️ Please enter Style Tags");
                return;
            }
        }

        setLoading(true);
        try {
            const res = await fetch("/api/usersregistration", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                }),
            });

            if (res.ok) {
                setAlertMessage("✅ Account created successfully, please sign in");
                setFormData(initialForm);
                setTimeout(() => router.push("/signin"), 1500);
            } else {
                const error = await res.json().catch(() => ({}));
                setAlertMessage("❌ Error: " + (error.message || "Failed to register"));
            }
        } catch (err) {
            console.error(err);
            setAlertMessage("❌ Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!alertMessage) return;
        const timer = setTimeout(() => setAlertMessage(""), 3000);
        return () => clearTimeout(timer);
    }, [alertMessage]);

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="relative w-11/12 max-w-2xl fancyFont2 mx-auto text-lg flex flex-col justify-center items-center my-7 border-b"
            >
                <p className="relative text-2xl text-shadow-sm text-shadow-stone-500 mb-5">
                    Create your account
                </p>

                {/* Full Name */}
                <Field
                    id="fullName"
                    label="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                />

                {/* Email */}
                <Field
                    id="userEmail"
                    label="Email"
                    value={formData.userEmail}
                    onChange={handleChange}
                    type="email"
                />

                {/* Mobile */}
                <Field
                    id="userMobile"
                    label="Mobile"
                    value={formData.userMobile}
                    onChange={handleChange}
                    type="tel"
                />

                {/* Password */}
                <Field
                    id="password"
                    label="Password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                />
                

                <button className="relative w-1/2 mt-2 max-w-2xs rounded-2xl shadow shadow-stone-500 text-shadow-sm text-shadow-stone-500">
                    {loading ? "Registering..." : "Register"}
                </button>

                <p className="relative w-full text-center my-5 px-8">
                    Already registered?{" "}
                    <Link href="/signin" className="underline italic">
                        Sign in
                    </Link>
                    .
                </p>
            </form>

            {loading && <LoadingScreen />}
            {alertMessage && <AllAlerts message={alertMessage} />}
        </>
    );
};

// Reusable Field Component
const Field = ({ id, label, value, onChange, type = "text", placeholder, isTextarea }) => (
    <div className={styles.formContainer}>
        <label htmlFor={id} className={styles.shortLabel}>
            {label}
        </label>
        <div className={styles.inputWrapper}>
            {isTextarea ? (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`${styles.input} min-h-[50px]`}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder || `Enter ${label}`}
                    value={value}
                    onChange={onChange}
                    className={styles.input}
                />
            )}
        </div>
    </div>
);

export default RegistrationForm;
